Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path $PSScriptRoot -Parent
$lessonPath = Join-Path $repoRoot "lessons/0004-arrays-and-slices.html"
$html = Get-Content -Raw -LiteralPath $lessonPath
$pattern = '<pre><code class="language-go" data-example="([^"]+)">(.*?)</code></pre>'
$matches = [regex]::Matches($html, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

$expected = @{
  "go-array-copy" = "original: [TypeScript Go Rust]"
  "go-slice-view" = "slice: [TypeScript Golang Rust]"
  "go-playlist" = "backup: [Go 并发 HTTP]"
  "go-review" = "2`n4"
}

if ($matches.Count -ne 5) {
  throw "Expected 5 executable Go examples in lesson 4, found $($matches.Count)."
}

$tempRoot = [System.IO.Path]::GetTempPath()
$tempDir = Join-Path $tempRoot ("golang-journey-lesson4-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
  foreach ($match in $matches) {
    $name = $match.Groups[1].Value
    $source = [System.Net.WebUtility]::HtmlDecode($match.Groups[2].Value)
    $sourcePath = Join-Path $tempDir "$name.go"
    Set-Content -LiteralPath $sourcePath -Encoding utf8 -Value $source

    $output = (& go run $sourcePath 2>&1 | Out-String).Trim()
    $exitCode = $LASTEXITCODE

    if ($name -eq "go-append-error") {
      if ($exitCode -eq 0 -or -not $output.Contains("is not used")) {
        throw "Expected $name to fail because append's result is unused. Actual: $output"
      }
      continue
    }

    if ($exitCode -ne 0) {
      throw "$name failed to run: $output"
    }
    if ($name -eq "go-review" -and $output -notmatch '^2\s+4$') {
      throw "$name output did not contain two lines with 2 and 4. Actual: $output"
    }
    if ($name -ne "go-review" -and -not $output.Contains($expected[$name])) {
      throw "$name output did not contain '$($expected[$name])'. Actual: $output"
    }
  }
}
finally {
  $resolvedTemp = [System.IO.Path]::GetFullPath($tempDir)
  $resolvedRoot = [System.IO.Path]::GetFullPath($tempRoot)
  if ($resolvedTemp.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    Remove-Item -LiteralPath $resolvedTemp -Recurse -Force
  }
}

Write-Host "Lesson 4 executable Go examples passed."
