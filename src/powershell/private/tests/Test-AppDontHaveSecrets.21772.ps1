
<#
.SYNOPSIS

#>

function Test-AppDontHaveSecrets {
    [CmdletBinding()]
    param(
        $Database
    )

    $sqlApp = @"
select distinct ON (id) appId, displayName, signInAudience,
    try_cast(unnest(passwordCredentials).endDateTime as date) as keyEndDateTime
from Application
where passwordCredentials != '[]'
order by displayName, keyEndDateTime DESC
"@

    $sqlSP = @"
select distinct ON (id) appId, displayName, appOwnerOrganizationId, signInAudience,
    try_cast(unnest(passwordCredentials).endDateTime as date) as keyEndDateTime
from ServicePrincipal
where passwordCredentials != '[]'
order by displayName, keyEndDateTime DESC
"@

    $resultsApp = Invoke-DatabaseQuery -Database $Database -Sql $sqlApp
    $resultsSP = Invoke-DatabaseQuery -Database $Database -Sql $sqlSP

    $passed = ($resultsApp.Count -eq 0) -and ($resultsSP.Count -eq 0)

    if ($passed) {
        $testResultMarkdown += "Applications in your tenants do not use client secrets."
    }
    else {
        $testResultMarkdown += "Found $($resultsApp.Count) applications and $($resultsSP.Count) service principals with client secrets configured.`n`n%TestResult%"
    }

    if ($resultsApp.Count -gt 0) {
        $mdInfo = "`n## Applications with long-lived credentials`n`n"
        $mdInfo += "| Application | Secret expiry |`n"
        $mdInfo += "| :--- | :--- |`n"
        foreach ($item in $resultsApp) {
            $portalLink = "https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Credentials/appId/{0}" -f $item.appId
            $mdInfo += "| [$(Get-SafeMarkdown($item.displayName))]($portalLink) | $($item.keyEndDateTime) |`n"
        }
    }

    if ($resultsSP.Count -gt 0) {
        $mdInfo += "`n`n## Service Principals with long-lived credentials`n`n"
        $mdInfo += "| Service principal | App owner tenant | Secret expiry |`n"
        $mdInfo += "| :--- | :--- | :--- |`n"
        foreach ($item in $resultsSP) {
            $tenant = Get-ZtTenant -tenantId $item.appOwnerOrganizationId
            $portalLink = "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/ManagedAppMenuBlade/~/SignOn/objectId/$($item.id)/appId/$($item.appId)/preferredSingleSignOnMode/saml/servicePrincipalType/Application/fromNav/"
            $mdInfo += "| [$(Get-SafeMarkdown($item.displayName))]($portalLink) | $(Get-SafeMarkdown($tenant.displayName)) | $($item.keyEndDateTime) |`n"
        }
    }

    $testResultMarkdown = $testResultMarkdown -replace "%TestResult%", $mdInfo

    Add-ZtTestResultDetail -TestId '21772' -Title 'Applications don''t have secrets configured' `
        -UserImpact Medium -Risk High -ImplementationCost Medium `
        -AppliesTo Entra -Tag Application `
        -Status $passed -Result $testResultMarkdown
}

function Get-SafeMarkdown($text) {
    $text = $text -replace "\[", "\["
    $text = $text -replace "\]", "\]"
    return $text
}
