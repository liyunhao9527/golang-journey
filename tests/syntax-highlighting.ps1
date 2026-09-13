Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path $PSScriptRoot -Parent
$htmlFiles = @("lessons", "reference") |
  ForEach-Object { Get-ChildItem (Join-Path $repoRoot $_) -Filter "*.html" }

$failures = [System.Collections.Generic.List[string]]::new()
$themeHref = '<link rel="stylesheet" href="../assets/vendor/highlight-one-dark.css">'
$codeBlocksHref = '<link rel="stylesheet" href="../assets/code-blocks.css">'
$librarySrc = '<script src="../assets/vendor/highlight.min.js" defer></script>'
$initializerSrc = '<script src="../assets/highlight-init.js" defer></script>'

foreach ($htmlFile in $htmlFiles) {
  $html = Get-Content -Raw $htmlFile.FullName

  if (-not $html.Contains($themeHref)) {
    $failures.Add("$($htmlFile.Name): missing local highlight theme")
  }
  if (-not $html.Contains($codeBlocksHref)) {
    $failures.Add("$($htmlFile.Name): missing code gutter styles")
  }
  if (-not $html.Contains($librarySrc)) {
    $failures.Add("$($htmlFile.Name): missing local highlight library")
  }
  if (-not $html.Contains($initializerSrc)) {
    $failures.Add("$($htmlFile.Name): missing local highlight initializer")
  }
  if ($html -match '<pre><code(?! class="language-(?:go|typescript|bash|plaintext)")') {
    $failures.Add("$($htmlFile.Name): contains an unlabelled code block")
  }
  if ($html -match '(?:cdnjs|jsdelivr|unpkg).*highlight') {
    $failures.Add("$($htmlFile.Name): highlight assets must not use a CDN")
  }
}

$requiredAssets = @(
  (Join-Path $repoRoot "assets/vendor/highlight.min.js"),
  (Join-Path $repoRoot "assets/vendor/highlight-one-dark.css"),
  (Join-Path $repoRoot "assets/code-blocks.css"),
  (Join-Path $repoRoot "assets/highlight-init.js")
)

foreach ($asset in $requiredAssets) {
  if (-not (Test-Path -LiteralPath $asset -PathType Leaf)) {
    $failures.Add("missing asset: $asset")
  }
}

if ($failures.Count -gt 0) {
  $failures | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Host "Syntax highlighting checks passed for $($htmlFiles.Count) HTML pages."
