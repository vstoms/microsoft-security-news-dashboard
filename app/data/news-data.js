export const newsItems = [
  {
    "id": "microsoft-entra-04-plan-for-change-update-scim-provisioning-applications-to-use-modern-authentication",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Plan for change - Update SCIM provisioning applications to use modern authentication",
    "summary": "Plan for change Service category: Provisioning Product capability: Outbound to SaaS Applications What is changing SCIM provisioning applications that use the OAuth 2.0 Authorization Code grant will be updated to support modern authentication methods, such as OAuth 2.0 Client Credentials and workload identity federation. Existing provisioning jobs will not switch automatically. Customers will need to update job configuration after the new method is available. A small number of applications that cannot support a modern method may be retired from the Microsoft Entra app gallery. When this is changing This change will roll out over the coming months, and timing will vary by application. We will share impacted applications, customer deadlines, and supporting documentation through monthly What’s new articles and the Microsoft 365 Message Center. Why this is changing This update strengthens the security of Microsoft Entra provisioning integrations by moving away from older authentication patterns. Modern methods are better suited for service-to-service scenarios and can reduce credential management overhead, including the need to rotate shared secrets. Action required from customers Identify existing provisioning jobs that use the OAuth 2.0 Authorization Code grant. Watch for announcements about affected applications and availability of updated authentication methods. Update and test provisioning job configuration when your application supports a modern authentication method. If an application is retired, plan to migrate to a supported alternative. Stay informed Please monitor monthly What’s new articles and the Microsoft 365 Message Center for future announcements, migration guidance, deadlines, and documentation.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Action required",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 150,
    "tags": [
      "Action required",
      "Identitet",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-sentinel-03-call-to-action-update-older-microsoft-sentinel-content-as-code-sentinel-repositories-api-versions-before-june-15-2026",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": "2025-09-01",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Call to action: update older Microsoft Sentinel content as code (Sentinel repositories) API versions before June 15, 2026",
    "summary": "Starting June 15, 2026, older API versions used by Microsoft Sentinel repositories will no longer be supported. This change impacts all Source Control and Source Controls actions in the Microsoft Sentinel REST API for the affected API versions. The retired API versions will no longer be supported, and requests using them will fail. Existing repository connections created with those APIs aren't affected, and the repositories will continue to operate. Required action If you're using APIs to create or manage repository connections, transition to API version 2025-09-01, 2025-06-01, or 2025-07-01-preview before June 1, 2026 to avoid service disruption. Affected API versions The following API versions will be retired on June 1, 2026: Preview API versions (click to expand) 2021-03-01-preview 2021-09-01-preview 2021-10-01-preview 2022-01-01-preview 2022-04-01-preview 2022-05-01-preview 2022-06-01-preview 2022-07-01-preview 2022-08-01-preview 2022-09-01-preview 2022-10-01-preview 2022-11-01-preview 2022-12-01-preview 2023-02-01-preview 2023-03-01-preview 2023-04-01-preview 2023-05-01-preview 2023-06-01-preview 2023-07-01-preview 2023-08-01-preview 2023-09-01-preview 2023-10-01-preview 2023-11-01-preview 2023-12-01-preview 2024-01-01-preview 2024-04-01-preview 2024-10-01-preview 2025-01-01-preview 2025-04-01-preview 2025-07-01-preview Stable API versions (click to expand) 2023-11-01 2024-03-01 2024-09-01 2025-03-01 Recommended API versions to use: 2025-09-01 (stable) 2025-06-01 (stable) 2025-07-01-preview (preview)",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Action required",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Automatisering",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 150,
    "tags": [
      "Action required",
      "Automatisering",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Frist: 2025-09-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-updated-call-to-action-update-automation-by-july-1-2026-account-name-is-now-consistently-the-upn-prefix-for-analytics-rule-alerts",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": "2026-07-01",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "[Updated] Call to action: update automation by July 1, 2026 - Account Name is now consistently the UPN prefix for analytics rule alerts",
    "summary": "Microsoft Sentinel is updating how the account entity's Account Name value is populated for analytics rule alerts when the full UPN is mapped into Account Name. This change improves consistency for downstream automation rules and Logic Apps playbooks. This change might affect automation logic that filters on or compares the AccountName property (Logic Apps: AccountName), especially if it expects the full UPN. What's changing When a full UPN (for example, user@domain.com) is mapped to Account Name in an analytics rule, Account Name will always be the UPN prefix only (user). Previously, it could sometimes be user and sometimes user@domain.com. Additional UPN-related fields will be added to the account entity in the SecurityAlert table: UserPrincipalName (full UPN, for example user@domain.com), UPNSuffix, and the UPN prefix. For example: Before: Analytics: user@domain.com -> Automation rule Account Name: user or user@domain.com After: Analytics: user@domain.com -> Automation rule Account Name: user + UPNSuffix: domain.com What you need to do Update any automation rules or logic apps that compare against the full UPN. Replace direct equality checks with separate comparisons for the UPN prefix and UPN suffix. We strongly recommend using Contains and Starts with operations instead of strict equality to maintain compatibility both before and after the change. For example, replace conditions such as AccountName Equals user@domain.com with logic like: AccountName Contains user or Starts with user UPNSuffix Equals domain.com / Starts with domain.com / Contains domain.com",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Action required",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 125,
    "tags": [
      "Action required",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Frist: 2026-07-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-02-upcoming-change-microsoft-entra-connect-security-update-to-block-hard-match-for-users-with-microsoft-entra-roles",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": "2026-06-01",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Upcoming change – Microsoft Entra Connect security update to block hard match for users with Microsoft Entra roles",
    "summary": "Plan for change Service category: Entra Connect Product capability: Entra Connect What is Hard-matching in Microsoft Entra Connect Sync and Cloud Sync? When Microsoft Entra Connect or Cloud Sync adds new objects from Active Directory, the Microsoft Entra ID service tries to match the incoming object with an Entra object by looking up the incoming object’s sourceAnchor value against the OnPremisesImmutableId attribute of existing cloud managed objects in Microsoft Entra ID. If there's a match, Microsoft Entra Connect or Cloud Sync takes over the source or authority (SoA) of that object and updates it with the properties of the incoming Active Directory object in what is known as \"hard-match.\" To strengthen the security posture of your Microsoft Entra ID environment, we are introducing a change that will restrict certain types of hard-match operations by default. What’s changing Beginning June 1, 2026, Microsoft Entra ID will block any attempt by Entra Connect Sync or Cloud Sync from hard-matching a new user object from Active Directory to an existing cloud-managed Entra ID user object that holds Microsoft Entra roles. This means: If a cloud managed user already has onPremisesImmutableId (sourceAnchor) set and is assigned a Microsoft Entra role, Microsoft Entra Connect Sync or Cloud Sync will no longer be able to take over the Source of Authority of that user by hard-matching with an incoming user object from Active Directory. This safeguard prevents attackers from taking over privileged cloud managed users in Entra by manipulating attributes of user objects in Active Directory. What’s not changing Hard match operations for cloud users without Microsoft Entra roles are not affected. Soft match behavior isn't affected. Ongoing sync from Active Directory to Entra ID for previously hard-matched objects will not be affected. Customer action required If you encounter a hard match error after June 1, 2026, see our documentation for mitigation steps.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Action required",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 125,
    "tags": [
      "Action required",
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Frist: 2026-06-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-sentinel-11-call-to-action-update-queries-and-automation-by-july-1-2026-standardized-account-entity-naming-in-incidents-and-alerts",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": "2026-07-01",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Call to action: update queries and automation by July 1, 2026 - standardized account entity naming in incidents and alerts",
    "summary": "Microsoft Sentinel is updating how it identifies account entities in incidents and alerts. This change introduces a standardized naming logic to improve consistency and reliability across your analytics and automation workflows. Important This change might affect your analytic rules, automation rules, playbooks, workbooks, hunting queries, and custom integrations. Microsoft Sentinel will now select the most reliable account identifier using the following priority: UPN prefix – the part before “@” in a User Principal Name Example: john.doe@contoso.com → john.doe Name – used if UPN prefix is unavailable Display Name – fallback if both above are missing Update your KQL queries and automation logic to follow the new precedence-aware pattern. Use the coalesce()(/kusto/query/coalesce-function) function to ensure compatibility: coalesce(Account.UPNprefix, Account.Name, Account.DisplayName) Test all changes in a nonproduction workspace before rolling out to production.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Action required",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Hunting",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 125,
    "tags": [
      "Action required",
      "Identitet",
      "Hunting",
      "Automatisering"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Frist: 2026-07-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-deprecation-completed-legacy-grouped-recommendations-removed-from-azure-portal",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Deprecation completed: Legacy grouped recommendations removed from Azure portal",
    "summary": "July 31, 2026 Retirement of legacy grouped recommendations (sub-assessments) has started. Customers can no longer access the deprecated data through the API. The Azure portal and Azure Resource Graph might take a few days to reflect the change. Individual recommendations replace the legacy grouped recommendations, as announced in May 2026. Customers who previously relied on grouped recommendations should validate existing automation, reporting, governance workflows, and queries, and migrate any remaining disable rules to exemptions.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Governance",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Automatisering",
      "Governance",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-plan-enablement-api-now-blocks-onboarding-to-five-deprecated-defender-plans",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": "2026-07-05",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Plan enablement API now blocks onboarding to five deprecated Defender plans",
    "summary": "July 5, 2026 Effective immediately, onboarding is blocked through the plan-enablement API for five deprecated Microsoft Defender for Cloud pricing plans. This update aligns with Microsoft deprecation policy and matches existing portal behavior, where these plans are already blocked in the UI. This update applies to new enablement only. Existing subscriptions on these plans continue to receive product access, value, and billing with no immediate change to their current experience. Important If you have existing scripts or automations that call the plan-enablement API for these deprecated plans, update those workflows to use supported plans before enforcement reaches your environment. Calls that try to enable deprecated plans can fail after the block is in effect. Deprecated plan Migration path Microsoft Defender for Azure Kubernetes Service Defender for Containers Microsoft Defender for Azure Container Registry Defender for Containers Microsoft Defender for Key Vault Fixed pricing model Microsoft Defender for DNS Defender for Servers Microsoft Defender for Azure Resource Manager Fixed pricing model No official retirement date has been announced for these plans. Customers are encouraged to migrate to the recommended plans.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Hunting",
      "Automatisering",
      "Container",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Hunting",
      "Automatisering",
      "Container",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2026-07-05",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-container-level-misconfiguration-recommendations-for-kubernetes-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Container-level misconfiguration recommendations for Kubernetes (Preview)",
    "summary": "June 1, 2026 Defender for Cloud now introduces agentless, container-level Kubernetes Security Posture Management (KSPM) misconfiguration recommendations, replacing the previous cluster-level findings with more granular, actionable insights integrated into Defender CSPM. The new recommendations assess individual containers rather than entire clusters, covering areas such as CPU/memory limits, trusted registries, privilege escalation, sensitive host namespaces, read-only root filesystem, HTTPS-only access, automounting API credentials, Linux capabilities, privileged containers, and running as root. Key details: Container-level and cluster-level recommendations may coexist temporarily during the transition period. Cluster-level recommendations will be deprecated at GA. The following cluster-level recommendations are set for deprecation: HostPath volume mount restrictions, allowed ports enforcement, host networking/ports restrictions, CAP_SYS_ADMIN capability restrictions, and AppArmor profile restrictions. No runtime agent required — uses agentless architecture. Includes scale controls for high-volume environments. Learn more about container security recommendations.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "AI",
      "Container",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Automatisering",
      "AI",
      "Container",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-deprecation-of-preview-of-container-and-container-images-vulnerability-recommendations",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Deprecation of preview of container and container images vulnerability recommendations",
    "summary": "March 04, 2026 As part of the transition to individual recommendations, Microsoft Defender for Cloud is deprecating existing grouped container vulnerability recommendations. This change enables more granular visibility, prioritization, and governance of container security findings. Grouped recommendations previously aggregated multiple findings under a single recommendation. These findings are now surfaced as individual recommendations, created per software update, vulnerability, secret, or issue type. During the transition period, grouped and individual recommendations may appear side by side. Grouped recommendations are on a deprecation path and will be removed in phases. The following grouped container vulnerability recommendations will be deprecated on April 13, 2026: Container recommendations [Preview] Containers running in Azure should have vulnerability findings resolved [Preview] Containers running in AWS should have vulnerability findings resolved [Preview] Containers running in GCP should have vulnerability findings resolved Container image recommendations [Preview] Container images in Azure registry should have vulnerability findings resolved [Preview] Container images in AWS registry should have vulnerability findings resolved [Preview] Container images in GCP registry should have vulnerability findings resolved Customers should update any queries, automation, governance rules, or workflows that rely on grouped recommendation keys to use individual recommendations and security categories instead. When querying individual recommendations, the same logic can be applied across cloud providers by adjusting the Source value. Example: Container vulnerability recommendations The following query allows customers to identify the new individual container vulnerability recommendations for containers running in Azure. To target containers running in AWS or GCP, change the Source value to \"AWS\" or \"GCP\". securityresources | where type == \"microsoft.security/assessments\" | where properties.metadata.recommendationCategory == \"SoftwareUpdate\" | where properties.resourceDetails.ResourceType == \"K8s-container\" | where properties.resourceDetails.Source == \"Azure\" Example: Container image vulnerability recommendations The following query allows customers to identify the new individual container image vulnerability recommendations in Azure container registries. To target AWS or GCP registries, update the Source value accordingly. securityresources | where type == \"microsoft.security/assessments\" | where properties.metadata.recommendationCategory == \"SoftwareUpdate\" | where properties.resourceDetails.ResourceType == \".containerimage\" | where properties.resourceDetails.Source == \"Azure\" Learn more about security recommendations and New individual recommendations format in Azure portal (Preview).",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Hunting",
      "Automatisering",
      "Container",
      "Governance",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Hunting",
      "Automatisering",
      "Container",
      "Governance",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-03-plan-for-change-agent-registry-consolidation-into-microsoft-agent-365",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Plan for change – Agent Registry consolidation into Microsoft Agent 365",
    "summary": "Plan for change Service category: Other Product capability: Directory We’re consolidating agent management experiences to make it easier to observe, govern, and secure all agents in your tenant. Agent 365 will be the single source of truth, offering a unified catalog, consistent visibility, and simplified management. What’s changing The Agent registry and Agent collections blades in the Entra admin center will be retired on May 1, 2026. No action is required by administrators. Agent functionality and management remain unaffected. You can still access the agent inventory in the All agents view within the Microsoft 365 admin center (MAC). With this change: Agent 365 becomes the unified registry and control plane for agents. Microsoft Entra continues to provide the identity foundation through Agent ID. The existing registry Graph API will be deprecated and replaced by a new API powered by Agent 365. Agents registered via the current API will need to be re-registered. We’ll follow up soon with details on the deprecation date and the availability of the new registry Graph API. All agent access and governance capabilities remain fully available through Agent ID and Agent 365.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "AI",
      "Governance",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Identitet",
      "Automatisering",
      "AI",
      "Governance",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-microsoft-entra-connect-health-now-enforces-tls-1-2",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Connect Health now enforces TLS 1.2",
    "summary": "General Availability Service category: Entra Connect Product capability: Entra Connect We’ve completed a full migration to TLS 1.2 for Entra Connect Health and removed legacy TLS 1.1 references as part of security hardening. Ensure your Health agents are up to date and your servers are configured to use TLS 1.2 for outbound connections. Why this matters TLS 1.1 is deprecated due to security vulnerabilities. This change helps protect agent-to-service communication and aligns with modern compliance expectations. What you need to do Ensure your Entra Connect Health agents are up to date and that your servers are configured to use TLS 1.2 for outbound connections. Enable TLS 1.2 support in your environment",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Identitet",
      "AI",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "security-exposure-management-09-migration-from-azureadconnectserver-to-entraconnectserver",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Migration from AzureAdConnectServer to EntraConnectServer",
    "summary": "The legacy Azure AD Connect asset rule has been removed from Critical Assets. Its associated device role, AzureADConnectServer, will be deprecated in December 2025. Ensure all relevant custom rules are transitioned to use the new device role, EntraConnectServer, to maintain compliance and visibility.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 120,
    "tags": [
      "Deprecation",
      "Identitet",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-general-availability-of-individual-recommendations-for-defender-for-cloud-in-azure-portal-and-deprecation-of-legacy-grouped-recommendations",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-05-05",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of individual recommendations for Defender for Cloud in Azure portal and deprecation of legacy grouped recommendations",
    "summary": "May 5, 2026 Individual recommendations for Defender for Cloud that were previously represented as grouped recommendations are now generally available (GA) in the Azure portal. Azure portal secure score behavior: The classic secure score in the Azure portal is also affected by these individual recommendations. However, you shouldn't expect a material change in the overall score, as the individual recommendations replace their previously grouped equivalents and are designed to keep the score functionally stable. Deprecation notice: Legacy grouped recommendations Grouped recommendation types are deprecated from the Azure portal and will be removed on July 31, 2026. These recommendations are currently tagged as Set for deprecation.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Hunting",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Hunting",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2026-05-05",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "unified-secops-01-updated-date-microsoft-sentinel-in-the-azure-portal-to-be-retired-march-2027",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": "2027-03-31",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Updated date: Microsoft Sentinel in the Azure portal to be retired March 2027",
    "summary": "Microsoft Sentinel is generally available in the Microsoft Defender portal, including for customers without Microsoft Defender XDR or an E5 license. This means that you can use Microsoft Sentinel in the Defender portal even if you aren't using other Microsoft Defender services. After March 31, 2027, Microsoft Sentinel will no longer be supported in the Azure portal and will be available only in the Microsoft Defender portal. If you're currently using Microsoft Sentinel in the Azure portal, we recommend that you start planning your transition to the Defender portal now to ensure a smooth transition and take full advantage of the unified security operations experience offered by Microsoft Defender.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2027-03-31",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-01-updated-date-microsoft-sentinel-in-the-azure-portal-to-be-retired-march-2027",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": "2027-03-31",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Updated date: Microsoft Sentinel in the Azure portal to be retired March 2027",
    "summary": "Microsoft Sentinel is generally available in the Microsoft Defender portal, including for customers without Microsoft Defender XDR or an E5 license. This means that you can use Microsoft Sentinel in the Defender portal even if you aren't using other Microsoft Defender services. After March 31, 2027, Microsoft Sentinel will no longer be supported in the Azure portal and will be available only in the Microsoft Defender portal. If you're currently using Microsoft Sentinel in the Azure portal, we recommend that you start planning your transition to the Defender portal now to ensure a smooth transition and take full advantage of the unified security operations experience offered by Microsoft Defender.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2027-03-31",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-11-sap-data-connectors",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": "2026-09-30",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SAP data connectors",
    "summary": "Agentless data connector for Sentinel Solution for SAP now generally available. Learn more from our Tech Community blog. Deprecation: Containerized SAP data connector will be out of support by September 30th 2026. Migrate to our Agentless SAP data connector today. All new deployments only have the new agentless connector option that is billed at the same price.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Container",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Container",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Frist: 2026-09-30",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-07-microsoft-sentinel-in-the-azure-portal-to-be-retired-july-2026",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel in the Azure portal to be retired July 2026",
    "summary": "Microsoft Sentinel is generally available in the Microsoft Defender portal, including for customers without Microsoft Defender XDR or an E5 license. This means that you can use Microsoft Sentinel in the Defender portal even if you aren't using other Microsoft Defender services. Starting in July 2026, Microsoft Sentinel will be supported in the Defender portal only, and any remaining customers using the Azure portal will be automatically redirected. Note This date has been extended. Microsoft Sentinel in the Azure portal will be retired March 31, 2027. If you're currently using Microsoft Sentinel in the Azure portal, we recommend that you start planning your transition to the Defender portal now to ensure a smooth transition and take full advantage of the unified security operations experience offered by Microsoft Defender.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-07-microsoft-sentinel-in-the-azure-portal-to-be-retired-july-2026",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel in the Azure portal to be retired July 2026",
    "summary": "Microsoft Sentinel is generally available in the Microsoft Defender portal, including for customers without Microsoft Defender XDR or an E5 license. This means that you can use Microsoft Sentinel in the Defender portal even if you aren't using other Microsoft Defender services. Starting in July 2026, Microsoft Sentinel will be supported in the Defender portal only, and any remaining customers using the Azure portal will be automatically redirected. If you're currently using Microsoft Sentinel in the Azure portal, we recommend that you start planning your transition to the Defender portal now to ensure a smooth transition and take full advantage of the unified security operations experience offered by Microsoft Defender.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 115,
    "tags": [
      "Deprecation",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-updated-ciem-recommendation-logic",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": "2026-02-02",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Updated CIEM recommendation logic",
    "summary": "February 2, 2026 Cloud Infrastructure Entitlement Management (CIEM) recommendations are now available as a native capability in Microsoft Defender for Cloud across Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). This update changes how inactive identities and over-permissioned roles are evaluated and improves recommendation accuracy. It may affect existing recommendation results. Key changes Inactive identity detection now evaluates unused role assignments instead of sign-in activity. The inactivity lookback window is extended to 90 days (previously 45 days). Identities created within the past 90 days aren’t evaluated as inactive. The Permissions Creep Index (PCI) metric is deprecated and no longer appears in recommendations. CIEM onboarding no longer requires elevated high-risk permissions. Cloud-specific considerations Cloud Details Azure Inactive identity recommendations include evaluation of read-level permissions. AWS CIEM evaluates AWS users and roles whose permissions can be reliably assessed. SAML and SSO identities require AWS CloudTrail Logs (Preview) to be enabled in the Defender CSPM plan. Serverless and compute identities are excluded from CIEM inactivity evaluation, which might affect recommendation counts. GCP CIEM evaluation requires Cloud Logging ingestion (Preview) to be enabled in the Defender CSPM plan. Learn more about permissions management in Defender for Cloud.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 110,
    "tags": [
      "Deprecation",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2026-02-02",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-new-container-security-capabilities-are-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": "2026-07-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New container security capabilities are now generally available",
    "summary": "July 1, 2026 The following container security capabilities in Microsoft Defender for Cloud are now generally available: Container-level misconfiguration recommendations for Kubernetes: Agentless, container-level KSPM recommendations in Defender CSPM that assess individual containers rather than entire clusters. The following cluster-level recommendations are now deprecated: HostPath volume mount restrictions, allowed ports enforcement, host networking/ports restrictions, CAP_SYS_ADMIN capability restrictions, and AppArmor profile restrictions. Learn more about container security recommendations. Upgrade Azure Kubernetes Service Version recommendation: Actionable recommendation to remediate vulnerabilities in AKS-managed system pods by identifying the minimum AKS version upgrade required. Learn more about reviewing and remediating Kubernetes node vulnerabilities and security recommendations for containers. Vulnerability assessment for runtime-discovered container images on EKS and GKE: Extends vulnerability assessment to runtime-discovered images on Amazon EKS and Google GKE, providing unified coverage across Azure, AWS, and GCP. Learn more about vulnerability assessment for containers. Kubernetes node vulnerability assessment for EKS and GKE: Extends Kubernetes node (host) vulnerability assessment to EKS and GKE, bringing parity with the existing AKS capability. Learn more about Kubernetes node vulnerability assessment. Scanning support for Docker Hardened container images: Extends vulnerability scanning coverage to Docker Hardened container images. For all supported distributions, see Registries and images support for vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 105,
    "tags": [
      "Deprecation",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2026-07-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-new-individual-recommendations-format-in-azure-portal-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New individual recommendations format in Azure portal (Preview)",
    "summary": "March 04, 2026 Microsoft Defender for Cloud is converting grouped recommendations into individual recommendations in the Azure portal. This change reflects a shift from grouping related findings under one recommendation to listing each recommendation separately. What's changing You might see a longer list of recommendations than before. Combined findings (such as vulnerabilities, exposed secrets, or misconfigurations) now show as individual recommendations rather than nested under a parent recommendation. The grouped recommendations will still show side by side with the new format for now, but they will be deprecated in several months. The new individual recommendations are marked as Preview with additional New version tag. These tags indicate that the recommendation is in an early state and doesn't affect Secure Score yet, as well as allowing you to filter the recommendations by it. You can now manage exemptions at scale instead of for each recommendation. Benefits Smart and accurate prioritization Each finding (such as vulnerabilities, exposed secrets, or misconfigurations) is now scored and prioritized individually, so you can focus on what actually reduces risk fastest. Actionable context per finding Each recommendation gives clear risk context and remediation guidance, making it easier to understand what's wrong, why it matters, and how to fix it. Better governance & tracking You apply targeted exemptions and measure security progress accurately. Note The grouped recommendations still appear side by side with the new format for now, but they will be deprecated in several months. Important To support the transition, learn more about best practices for transitioning from grouped to individual recommendations. Learn more about reviewing security recommendations.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Deprecation",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 105,
    "tags": [
      "Deprecation",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-microsoft-defender-for-open-source-relational-databases-on-aws-rds-will-become-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-06-01",
    "deadlineAt": "2026-06-01",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Defender for Open-Source Relational Databases on AWS RDS will become Generally Available",
    "summary": "May 24, 2026 Microsoft Defender for Open-Source Relational Databases will be generally available for Amazon Web Services Relational Database Service (AWS RDS) instances on June 1, 2026. Starting June 1, 2026, the plan will begin billing for AWS RDS instances that are already onboarded to the preview of the feature. Usage will start to appear on your July 2026 bill. You continue to receive database threat protection and sensitive data discovery for supported open-source relational databases, including Aurora PostgreSQL/MySQL, PostgreSQL, MySQL, and MariaDB on AWS RDS. No action is required to maintain protection if you onboarded Open-Source Relational Databases on AWS RDS in its preview stage as it will automatically transition to the GA state. To opt out and avoid future charges, disable Open-Source Relational Databases on the relevant AWS account before June 1, 2026. Learn more about Microsoft Defender for Open-Source Relational Databases and how to manage database protection plans.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 95,
    "tags": [
      "GA",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Ikrafttredelse: 2026-06-01",
      "Frist: 2026-06-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-sensor-v2-x-to-v3-x-migration-is-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensor v2.x to v3.x migration is now generally available",
    "summary": "Migration of Defender for Identity sensors from v2.x to v3.x is now generally available.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-high-scale-compatibility-hsc-mode-for-microsoft-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - High Scale Compatibility (HSC) mode for Microsoft Entra External ID",
    "summary": "General Availability Service category: B2C - Consumer Identity Management Product capability: B2B/B2C High Scale Compatibility (HSC) mode enables organizations to migrate to Microsoft Entra External ID while preserving their existing user directory. It's designed for large, established customer identity platforms transitioning from Azure AD B2C. With HSC mode, customers can rebuild applications on External ID while maintaining continuity for existing users, supporting a seamless, phased migration at scale. Some advanced customization capabilities are limited in this mode and will continue to evolve.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-passkey-profiles-in-microsoft-entra-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Passkey profiles in Microsoft Entra ID",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Passkey profiles in Microsoft Entra ID are now generally available. Passkey profiles provide a structured way to manage passkey (FIDO2) authentication by allowing administrators to define multiple profiles with different requirements and target them to specific user groups. Each profile can specify allowed passkey types, attestation requirements, and authenticator restrictions, enabling differentiated policies for scenarios such as administrators versus standard users. For tenants that previously configured passkeys, existing settings are migrated into a default passkey profile.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-just-in-time-password-migration-in-microsoft-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Just‑in‑Time Password Migration in Microsoft Entra External ID",
    "summary": "General Availability Service category: B2C - Consumer Identity Management Product capability: B2B/B2C Just‑in‑Time Password Migration is now generally available in Microsoft Entra External ID. Customers can migrate user passwords securely at first sign‑in, allowing users to continue using their existing credentials without forced password resets. This enables a smoother transition from Azure AD B2C or other identity providers while reducing migration risk and operational overhead.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-microsoft-entra-connect-sync-now-supports-windows-server-2025",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Connect Sync now supports Windows Server 2025",
    "summary": "New feature Service category: Entra Connect Product capability: Entra Connect Microsoft Entra Connect Sync now officially supports Windows Server 2025. This means you can confidently install and run Microsoft Entra Connect Sync on servers running Windows Server 2025, enabling your hybrid identity environment to take full advantage of the latest Windows Server enhancements. What this means for you: With this update, organizations can upgrade their identity synchronization servers to Windows Server 2025 without hesitation. Windows Server 2025 brings advanced features that improve security, performance, and flexibility, and our engineering team has thoroughly validated Microsoft Entra Connect Sync on this platform. Many customers have been eager to adopt Windows Server 2025 to leverage its enhanced security, better performance, and improved management capabilities. Now, with official support in place, you can benefit from these improvements while maintaining a reliable, fully supported hybrid identity solution. The Microsoft Entra Connect Sync .msi installation file is exclusively available on Microsoft Entra admin center under Microsoft Entra Connect. Check our version history page for more details on available versions. Consider moving to Cloud Sync: Microsoft Entra Cloud Sync is a sync client that works from the cloud and allows customers to set up and manage their sync preferences online. We recommend that you use Cloud Sync because we're introducing new features that improve the sync experiences through Cloud Sync. You can avoid future migrations by choosing Cloud Sync if that's the right option for you. Use the supported sync scenarios comparison to see if Cloud Sync is the right sync client for you.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-ability-to-convert-source-of-authority-of-synced-on-premises-ad-users-to-cloud-users-is-now-available",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Ability to convert Source of Authority of synced on-premises AD users to cloud users is now available",
    "summary": "New feature Service category: User Management Product capability: Microsoft Entra Cloud Sync We’re pleased to announce the general availability of object-level Source of Authority (SOA) switching for Microsoft Entra ID. With this feature, administrators can transition individual users from being synced with Active Directory (AD) to becoming cloud-managed accounts within Microsoft Entra ID. These users are no longer tied to AD sync and behave like native cloud users, giving you greater flexibility and control. This capability enables organizations to gradually reduce dependence on AD and simplify migration to the cloud, all while minimizing disruption for users and daily operations. Both Microsoft Entra Connect Sync and Cloud Sync fully support this SOA switch, ensuring a smooth transition process.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 90,
    "tags": [
      "GA",
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-sentinel-04-ai-powered-siem-migration-tool-is-now-generally-available",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "AI-powered SIEM migration tool is now generally available",
    "summary": "Accelerate migrations to Microsoft Sentinel from Splunk and QRadar using an AI-assisted SIEM migration experience designed to reduce manual effort and speed time-to-value.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 85,
    "tags": [
      "GA",
      "AI",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-05-public-preview-workload-identity-based-authentication-for-sap-successfactors-provisioning-integrations",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Workload identity-based authentication for SAP SuccessFactors provisioning integrations",
    "summary": "New feature Service category: Provisioning Product capability: Inbound to Entra ID Microsoft Entra is introducing workload identity–based authentication for SAP SuccessFactors provisioning. This new capability allows the Microsoft Entra provisioning service to authenticate to SAP SuccessFactors using Entra workload identity and short‑lived tokens instead of static credentials (username and password). This change helps customers transition to a more secure authentication model in preparation for SAP’s plan to deprecate basic authentication for SuccessFactors APIs by November 2026. What’s changing Customers can switch existing provisioning configurations from basic authentication to workload identity–based authentication directly through updated connectivity settings in the provisioning experience, without needing to recreate or restart their configuration. This method removes the need to store long-lived credentials and uses a standards-based authentication method between Entra and SAP SuccessFactors through SAP Cloud Identity Services. This capability applies to the following provisioning scenarios: SAP SuccessFactors to Active Directory user provisioning SAP SuccessFactors to Microsoft Entra ID user provisioning SAP SuccessFactors writeback (Entra to SuccessFactors) What this means for you If you are currently using basic authentication for any of the above SAP SuccessFactors provisioning integrations, you must upgrade to workload identity-based authentication before November 2026 to ensure uninterrupted operation of the integrations. No immediate action is required, but we recommend planning your migration early to avoid last-minute disruption. The new method improves security by: Eliminating stored passwords Using short-lived, verifiable tokens Aligning with SAP’s supported authentication model Recommended action Evaluate the new authentication option once available in your tenant Plan and test migration of existing provisioning jobs to workload identity-based authentication Update any internal documentation or operational processes that reference basic authentication Additional information For detailed configuration guidance and step-by-step instructions visit https://aka.ms/EntraSAPSFConnectivityGuide.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 75,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-defender-deployment-tool-for-windows-devices-for-linux-devices",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender deployment tool- for Windows devices- for Linux devices",
    "summary": "Feature. feature: Defender deployment tool- for Windows devices- for Linux devices. preview/ga: Preview. description: The new Defender deployment tool is a lightweight, self-updating application that streamlines onboarding devices to the Defender endpoint security solution. The tool takes care of prerequisites, automates migrations from older solutions, and removes the need for complex onboarding scripts, separate downloads, and manual installations. It supports Windows and Linux devices.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 70,
    "tags": [
      "Preview",
      "Endpoint",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-the-domain-investigation-page-is-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "The Domain investigation page is now generally available",
    "summary": "The Domain investigation page allows you to investigate an Active Directory domain. It shows Active Directory domain security, including domain properties, deployment health, identity summary, service account breakdown, sensitive entities, active recommendations, group policies, and trust relationships.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-kubernetes-misconfiguration-enforcement-in-defender-for-containers-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": "2026-07-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Kubernetes misconfiguration enforcement in Defender for Containers is now generally available",
    "summary": "July 1, 2026 Kubernetes misconfiguration enforcement in Microsoft Defender for Containers is now generally available. This feature evaluates Kubernetes resource configurations at admission time and can audit or block deployments that don't meet Microsoft security best-practice rules. With this release, Kubernetes misconfiguration enforcement is available through automatic provisioning. AKS and Azure Arc-enabled Kubernetes: Enable Defender for Containers with Kubernetes API access. AWS and GCP: Enable Defender for Containers with Agentless threat protection. Manual deployment with Helm is still supported. Learn more about Kubernetes misconfiguration enforcement.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Automatisering",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-07-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-06-identity-risk-score-is-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Identity risk score is now generally available",
    "summary": "The identity risk score is now generally available. The score ranges from 0 to 100 and reflects how likely an identity is to be compromised and how much damage a compromise could cause, based on the identity's criticality level and privileged role assignments. The Risk score tab on the Identity page provides a detailed breakdown of risk factors, percentile comparison, and risk trends.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-expanded-multicloud-security-coverage-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expanded multicloud security coverage is now generally available",
    "summary": "June 30, 2026 Microsoft Defender for Cloud's expanded multicloud security coverage is now generally available. This release significantly broadens posture assessment for AWS and GCP environments, adding support for about 90 new resource types and over 200 new security recommendations across data, identity and access, networking, compute, and container categories. What's included in this release: Over 200 new security recommendations for AWS and GCP resources are now generally available and contribute to your Cloud secure score. Support for about 90 additional AWS and GCP resource types, including services such as Amazon EMR, Amazon Neptune, AWS DMS, AWS DataSync, Amazon FSx, Amazon Kendra, Amazon Keyspaces, Amazon Kinesis, Amazon MQ, Amazon QuickSight, AWS AppFlow, AWS AppSync, AWS CodeBuild, AWS Cognito, AWS Comprehend, and more. Cloud secure score impact: With GA, these recommendations now affect your Cloud secure score. If you see score changes, they reflect the broader scope of your evaluated AWS and GCP estate — not a degradation of your environment's security. As more resources are assessed, you get more complete visibility and better prioritization of remediation work. To help you understand what changed and why, the portal includes: \"New\" tag: Recommendations introduced in the last 30 days are marked with a New tag in the recommendations list, so you can quickly identify recently added findings. Change log: Select View updates on the Cloud secure score card to open a change log entry that explains which new recommendations were added and how they affect your score. Portal banner: A banner on the Cloud secure score page highlights score changes caused by the expansion and links to the change log for context. For a full list of new and updated recommendations, see What's new in recommendations and alerts. To review the complete multicloud recommendation catalog, see the recommendations reference by category: Compute recommendations Container recommendations Data recommendations Identity and access recommendations Networking recommendations To understand how Cloud secure score is calculated and what affects it, see Secure score in Defender for Cloud.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-api-security-posture-management-for-function-apps-and-logic-apps-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-18",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "API security posture management for Function Apps and Logic Apps is now generally available",
    "summary": "June 18, 2026 API discovery and security posture management in the Defender cloud security posture management (Defender CSPM) plan for APIs hosted in Azure Function Apps and Azure Logic Apps is now generally available. This capability extends API security posture management in Microsoft Defender for Cloud beyond Azure API Management to your serverless and workflow APIs. With this release, you can: Discover APIs hosted in Function Apps and Logic Apps alongside APIs managed in Azure API Management, with automated onboarding into Defender for Cloud. Assess API security recommendations with risk factors, including unauthenticated APIs, APIs exposed to the internet, inactive or dormant APIs, and APIs that permit unencrypted traffic. Investigate API risks and attack paths across your environment by using Cloud Security Explorer and attack path analysis. Learn more about API security posture management and how to enable API security posture with Defender CSPM.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-18",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-sql-vulnerability-assessment-express-configuration-is-now-generally-available-for-azure-sql-managed-instance-and-azure-synapse-analytics-workspaces",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-08",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SQL Vulnerability Assessment Express Configuration is now generally available for Azure SQL Managed Instance and Azure Synapse Analytics workspaces",
    "summary": "June 8, 2026 Defender for SQL Vulnerability Assessment (SQL VA) Express Configuration is now generally available for Azure SQL Managed Instance and Azure Synapse Analytics workspaces. Express Configuration is already generally available for Azure SQL Database, and is now available across supported Azure PaaS SQL resource types at no extra cost. With Express Configuration, you can enable SQL VA without provisioning or managing a customer-managed storage account. Express Configuration is the recommended enablement mode and provides the same security value as Classic Configuration, including the full set of SQL VA rules, weekly automatic scans, on-demand scans, and baseline management. A new unified SQL VA REST API provides a consistent management surface across Azure SQL Database, Azure SQL Managed Instance, Azure Synapse Analytics workspaces, and SQL Server on machines, including SQL Server on Azure VMs and Azure Arc-enabled SQL Server. Upcoming automatic enablement at the subscription level: Over the next month, Defender for Cloud will begin rolling out automatic enablement of SQL VA Express Configuration at the subscription level for subscriptions where Defender for Azure SQL Databases is enabled. SQL VA Express Configuration will be turned on for Azure SQL Managed Instances and Azure Synapse Analytics workspaces that don't have an existing SQL VA configuration. Resources that are already configured with Classic Configuration or Express Configuration are not affected, and existing baselines and scan results are preserved. Learn more about SQL vulnerability assessment and how to enable vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-08",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-general-availability-of-microsoft-defender-for-open-source-relational-databases-on-aws-rds",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of Microsoft Defender for Open-Source Relational Databases on AWS RDS",
    "summary": "June 1, 2026 Microsoft Defender for Open-Source Relational Databases is now generally available for Amazon Web Services Relational Database Service (AWS RDS) instances. As of June 1, 2026, the plan bills for AWS RDS instances that were previously onboarded to the preview version of the feature. Usage starts to appear on your July 2026 bill. You continue to receive database threat protection and sensitive data discovery for supported open-source relational databases, including Aurora PostgreSQL, Aurora MySQL, PostgreSQL, MySQL, and MariaDB on AWS RDS. No action is required to maintain protection if you onboarded Open-Source Relational Databases on AWS RDS during the preview. The feature automatically transitioned to general availability. To opt out and avoid future charges, disable Open-Source Relational Databases on the relevant AWS account. Learn more about Microsoft Defender for Open-Source Relational Databases and how to manage database protection plans.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-byod-support-for-windows-client-using-entra-registration",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - BYOD support for Windows client using Entra registration",
    "summary": "New feature Service category: BYOD Product capability: Network Access We are excited to announce Bring Your Own Device (BYOD) support for Windows client using Entra-registered devices is now generally available. You can now enable users and partners to access corporate resources from their own devices. Administrators can assign the Private Application traffic profile to users with internal accounts, including internal guest users. This removes the previous requirement for Windows devices to be domain-joined.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-generally-available-jailbreak-root-detection-in-authenticator-app",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Generally available - Jailbreak/Root Detection in Authenticator App",
    "summary": "New feature Service category: Microsoft Authenticator App Product capability: Identity Security & Protection Microsoft Authenticator introduced jailbreak/root detection for Microsoft work or school accounts in the Authenticator app. Users with rooted/jailbroken devices will be blocked from adding/using work or school accounts in Authenticator app. Users must move to compliant devices to continue using work or school accounts in Authenticator. This capability is secure by default and does not require any admin configuration or control.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-scim-2-0-apis-for-microsoft-entra-id-in-us-gov-cloud",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - SCIM 2.0 APIs for Microsoft Entra ID in US Gov cloud",
    "summary": "New feature Service category: Provisioning Product capability: Identity Lifecycle Management SCIM 2.0 APIs are now generally available in the US Gov cloud, giving customers, developers, and partners a standards-based option for managing users and groups in Microsoft Entra using the System for Cross-domain Identity Management (SCIM) 2.0 specification.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-microsoft-entra-backup-and-recovery-is-now-available",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Backup and Recovery is now available",
    "summary": "New feature Service category: Entra Backup and Recovery Product capability: Entra Backup and Recovery Microsoft Entra Backup and Recovery is a built-in solution to help restore your tenant after accidental changes or malicious updates. Always on by default, it automatically backs up critical directory objects — including users, groups, applications, service principals, managed identities, Conditional Access policies, named locations, agent IDs, and authentication and authorization policy, so admins can quickly restore them to a previously known good state. At preview, Entra Backup and Recovery automatically takes daily backup of a tenant's supported directory objects. If a tenant has Microsoft Entra ID P1 or P2 licenses, one backup is taken each day and retained for 7 days. Admins can view available snapshots, generate difference reports to understand what has changed, and run recovery jobs to restore objects to a prior state. This gives your organization a reliable, built-in safety net helping you recover with confidence, minimize downtime, and protect your tenant from accidental changes, misconfigurations, or security compromises.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-general-availability-of-on-demand-malware-scanning-of-azure-files-in-microsoft-defender-for-storage",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-05-26",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of on-demand malware scanning of Azure Files in Microsoft Defender for Storage",
    "summary": "May 26, 2026 On-demand malware scanning of Azure Files in Microsoft Defender for Storage is now generally available. This feature extends on-demand malware scanning so you can scan Azure Storage accounts that contain blobs and files. You can start scans in the Azure portal or by using the REST API. You can also automate scans by using Azure Logic Apps, Azure Automation runbooks, and PowerShell scripts. Learn more about on-demand malware scanning.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-05-26",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-general-availability-of-microsoft-defender-for-cloud-and-github-advanced-security-integration",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-05-03",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of Microsoft Defender for Cloud and GitHub Advanced Security integration",
    "summary": "May 3, 2026 The native integration between Microsoft Defender for Cloud and GitHub Advanced Security (GHAS) is now generally available. This integration connects runtime security signals from Defender for Cloud with code-level vulnerability management in GHAS, enabling developers and security teams to prioritize and remediate vulnerabilities based on actual production risk. Key capabilities: Runtime context in GitHub: GHAS alerts are enriched with runtime risk factors from Defender for Cloud, including internet exposure, sensitive data access, and lateral movement potential. AI-powered remediation: GitHub Copilot Autofix provides validated, ready-to-merge security fixes with multi-fix bundling for efficiency. Security campaigns: Security teams can trigger targeted GitHub Security Campaigns from Defender for Cloud to mobilize developer teams on prioritized vulnerabilities. Bidirectional sync: GitHub issue status and ownership changes sync to Defender for Cloud within minutes. Prerequisites: Defender Cloud Security Posture Management (DCSPM) plan GitHub account with connector configured in Defender for Cloud GitHub Advanced Security license on connected repositories Learn more about GitHub Advanced Security integration and how to deploy the integration.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "AI",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "AI",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-05-03",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-general-availability-of-defender-for-cloud-integration-into-the-defender-portal",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-05-05",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of Defender for Cloud integration into the Defender portal",
    "summary": "May 5, 2026 Microsoft Defender for Cloud is now integrated into the Microsoft Defender portal, unifying cloud security posture management and threat protection in a single experience. This integration provides a centralized view across hybrid and multicloud environments, including Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). Key capabilities: A unified cloud security dashboard with posture insights, risk-based prioritization, and progress tracking A centralized cloud asset inventory with enriched risk, health, and coverage data Integrated posture management through Microsoft Security Exposure Management (MSEM), including secure score, recommendations, attack paths, and vulnerabilities A risk-based Cloud secure score for more accurate assessment and prioritization, including improved daily secure score calculations. Available only in the Defender portal A new recommendation model with individual findings for improved prioritization and governance (these individual recommendations might impact risk-based Cloud secure score calculations, as they now contribute to the score based on their granular, context-aware findings, rather than as part of a grouped recommendation) Note Cloud scopes is still in preview. This integration enables security teams to monitor, prioritize, and respond to risks across their entire environment from a single location.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-05-05",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-sentinel-05-generate-playbooks-using-ai-in-microsoft-sentinel-is-now-generally-available-ga",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Generate playbooks using AI in Microsoft Sentinel is now generally available (GA)",
    "summary": "You can now generate playbooks using AI in Microsoft Sentinel. The SOAR playbook generator creates python based automation workflows coauthored through a conversational experience with Cline, an AI coding agent.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Automatisering",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-account-discovery",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Account Discovery",
    "summary": "General Availability Service category: Provisioning Product capability: 3rd Party Integration Account discovery for connected applications is now generally available in Microsoft Entra ID Governance. This capability provides administrators with visibility into all accounts that exist within connected applications, including orphan accounts. By generating discovery reports directly from the provisioning experience, organizations can identify accounts in connected applications that aren't assigned to the enterprise application in Microsoft Entra and simplify onboarding the application. This capability requires a Microsoft Entra ID Governance or Microsoft Entra Suite license. Learn more: https://aka.ms/accountDiscoveryDocumentation.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-modernized-my-account-pages",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Modernized My Account pages",
    "summary": "Changed feature Service category: Modernized My Account pages Product capability: End User Experiences We're excited to announce the upcoming general availability of three redesigned pages in the My Account portal (myaccount.microsoft.com), bringing a modernized experience to help end users manage their account with greater ease and clarity. The redesigned Devices page features a modernized layout that makes it easier for users to view and manage their registered devices. BitLocker recovery keys are now more prominently surfaced, reducing the need to contact IT helpdesk for key retrieval. The new Personal Info page gives users a centralized view of their profile information alongside language and region settings - making it simple to review and update personal details in one place. The redesigned Organizations page delivers a modernized experience and resolves a longstanding issue where users were unable to successfully leave an organization. Availability: These pages will be generally available to all Microsoft Entra ID customers by end of June 2026. No admin action is required - users will see the updated experience automatically.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-support-for-passkeys-in-microsoft-entra-id-registration-campaign",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Support for passkeys in Microsoft Entra ID registration campaign",
    "summary": "General Availability Service category: MFA Product capability: Identity Security & Protection Microsoft Registration Campaigns now supports Passkeys (FIDO2) as an authentication method. Administrators can configure registration campaigns to nudge users to register passkeys during sign-in, helping organizations drive passkey adoption at scale. This first rollout experience is optimized for users who are in a passkey profile that doesn't have any restrictions.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-system-preferred-authentication-expanded-to-first-factor-in-microsoft-entra-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - System-preferred authentication expanded to first-factor in Microsoft Entra ID",
    "summary": "General Availability Service category: MFA Product capability: Identity Security & Protection We're extending system-preferred authentication to apply to the first factor in Microsoft-managed configurations (in addition to second factor). With this change, the system evaluates the credentials registered for a user and selects the highest-ranked authentication method for each step of the sign-in flow. As a result, users with strong, phishing-resistant credentials (such as passkeys) might be signed in without needing to use a password, improving both security and user experience. This behavior applies only to the Microsoft-managed state, where system-preferred authentication now covers both first- and second-factor authentication. The rollout is currently in progress and will be fully deployed to all Microsoft-managed tenants by the end of June.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-microsoft-entra-agent-id-platform",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Agent ID platform",
    "summary": "General Availability Service category: Other Product capability: Identity Security & Protection The Microsoft Entra Agent ID platform is now generally available. The Agent ID platform provides an identity and authorization framework built specifically for AI agents operating in enterprise environments. It enables developers to create and manage agent identities with enterprise-grade authentication, authorization, and governance, using standard protocols such as OAuth 2.0, MCP, and A2A.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "AI",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-microsoft-entra-certificate-based-authentication-cba-support-on-ios-and-cba-as-second-factor",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Certificate-based authentication (CBA) support on iOS and CBA as second factor",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Microsoft Entra Certificate-Based Authentication (CBA) is now generally available on iOS. Native iOS sign-ins now avoid unnecessary password and MFA prompts, enabling CBA as a supported second factor and allowing it to be prioritized as a system‑preferred MFA method. Users can choose another allowed MFA method if needed, based on tenant policy. More information at Microsoft Entra certificate-based authentication on Apple devices",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-as-an-ap-requestor-i-can-see-in-my-access-who-my-approver-s-are-if-the-access-package-owner-allows-me-to",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - As an AP requestor, I can see in My Access who my approver(s) are if the access package owner allows me to",
    "summary": "General Availability Service category: Entitlement Management Product capability: Entitlement Management In May, requestors will be able to see the name and email address of approvers for their pending access package requests directly in the My Access portal will be in General Availability. This feature improves transparency and helps streamline communication between requestors and approvers. At the tenant level, approver visibility is enabled by default for all members (non-guests) and can be controlled through the Entitlement Management settings in the Microsoft Entra Admin Center. At the access package level, admins and access package owners can configure the approver visibility and choose to override the tenant level setting under the advanced request settings in the access package policy.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-entra-cba-as-third-option-in-system-preferred-mfa-methods",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Entra CBA as third option in system-preferred MFA methods",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication General Availability - Due to known issues on iOS platform, the Entra certificate-based authentication (CBA) method was not allowed as a second factor on iOS and CBA was moved to the last place in the system-preferred MFA list as documented at FAQ. We've enhanced the user experience during sign-in with certificate in native iOS apps by removing unnecessary passwords and MFA prompts with all the known issues addressed. The feature enhancement enables us to support CBA as a second factor on iOS, and to move CBA to the third place in system preferred MFA methods.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-enforce-conditional-access-policies-like-mfa-on-every-pim-activation",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Enforce Conditional Access policies like MFA on every PIM activation",
    "summary": "General Availability Service category: Privileged Identity Management Product capability: Privileged Identity Management Generally available feature for configuring reauthentication with Conditional Access for Microsoft Entra Privileged Identity Management role activation.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-issuer-hints-for-microsoft-entra-cba",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Issuer Hints for Microsoft Entra CBA",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Issuer Hints is generally available now and helps improve the sign‑in experience for Entra Certificate‑Based Authentication (CBA) by ensuring users are prompted to select only certificates that are trusted and valid for their organization. This reduces confusion, minimizes sign‑in errors, and streamlines certificate selection especially on devices with multiple certificates installed. Issuers hints are designed to enhance both security and usability without changing how certificates are issued or managed.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-configurable-token-lifetime-policies",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Configurable Token Lifetime Policies",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: Platform Configurable token lifetime policies are now generally available in Microsoft Entra ID. This feature allows administrators to customize the lifetimes of access tokens, ID tokens, and SAML tokens issued by the Microsoft identity platform by creating and assigning token lifetime policies to applications and service principals. With configurable token lifetime policies, organizations can adjust token durations to meet their security and usability requirements -- for example, shortening access token lifetimes for sensitive applications or extending them for long-running automation scenarios.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-library-management-for-live-response",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Library management for live response",
    "summary": "Feature. feature: Library management for live response. preview/ga: GA. description: Library management for live response is now generally available. This feature provides a centralized view for managing files and scripts used during live response sessions.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-proactive-user-containment-contain-user",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Proactive user containment (contain user)",
    "summary": "Feature. feature: Proactive user containment (contain user). preview/ga: GA. description: The proactive user containment (contain user) action as part of the predictive shielding feature is now generally available. This action infuses activity data with exposure data to identify exposed credentials at risk of being compromised and reused to conduct malicious activity.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-automated-malware-remediation-in-defender-for-storage",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": "2026-03-31",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Automated malware remediation in Defender for Storage",
    "summary": "March 31, 2026 Automated malware remediation in Defender for Storage is now generally available. Defender for Cloud now lets you automatically soft-delete malicious blobs detected during on-upload or on-demand malware scanning. Soft-deleted blobs are quarantined and can be recovered for further investigation. You can enable or disable automated malware remediation at the subscription or storage account level in Microsoft Defender for Cloud in the Azure portal or through the API. Learn how to use built-in automated malware remediation for malicious blobs.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-03-31",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-synced-passkeys-in-microsoft-entra-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Synced passkeys in Microsoft Entra ID",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Microsoft Entra ID now supports synced passkeys as a generally available authentication method. Synced passkeys are FIDO2-based credentials that can be stored in built-in or third-party passkey providers and made available across a user’s devices. Administrators can manage the use of synced passkeys alongside device-bound passkeys through passkey profiles in the authentication methods policy. Existing passkey configurations can be managed using the same Entra ID authentication policies and reporting surfaces.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-microsoft-single-sign-on-for-linux-support-for-authenticating-with-phish-resistant-mfa-credentials",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Single Sign-On for Linux support for authenticating with Phish-Resistant MFA credentials",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: SSO The major improvements that this release provides includes: Enables authentication using CBA/YubiKey with certificate (PRMFA) Removes dependency on Java runtime as part of the Intune install Improved performance and reliability when authenticating to EntraId Provides device trust using Entra Join instead of Entra Registration Increased stability and performance for authentication requests",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-enabling-email-and-sms-otp-mfa-in-entra-external-id-native-authentication",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Enabling Email and SMS OTP MFA in Entra External ID Native Authentication",
    "summary": "General Availability Service category: B2C - Consumer Identity Management Product capability: Developer Experience Build secure sign‑in and sign‑up experiences for applications in Entra External ID using Native Authentication, with Email and SMS OTP MFA available through developer‑friendly SDKs and APIs..",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-purview-03-data-security-investigations",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Investigations",
    "summary": "New: Categorization now includes a Standard and Advanced option. Standard categorization can significantly reduce the time it takes to complete processing and the amount of Data Security Investigation Compute Units (compute unit) needed for categorization. In preview: New support for the Data Security Posture Agent in Microsoft Purview. The Data Security Posture agent (preview) in Data Security Investigations helps your organization proactively surface credentials buried in data across your organization at scale. Updated: New guidance for how categorization processes data in Data Security Investigations. Categorization uses relevance scoring to prioritize the most relevant content for each selected category. Updated documentation includes considerations for results, content volume effects, and recommendations for using examination tools for comprehensive analysis. New: Data Security Investigations now supports soft purge for Exchange mailbox items. Soft purge moves items to the recoverable items folder, preserving the ability to restore items based on retention settings. Updated documentation includes guidance for choosing between soft purge and hard purge methods. New: Audit search in Data Security Investigations is now generally available. Use audit search to identify and collect content based on user activities recorded in the Microsoft Purview unified audit log, such as accessing, copying, or downloading files, and pull the associated content into your investigation. Updated: Data Security Investigations searches now respect compliance boundaries configured with search permissions filters. Investigators whose accounts are scoped by a compliance boundary only see search results for content locations within their permitted boundary. New: Personal data examinations in Data Security Investigations identify and extract personally identifiable information from selected data items in an investigation scope. Quickly assess which personal data types were exposed after a data security incident, including names, email addresses, financial account numbers, and Social Security numbers, with severity classification and AI-generated reasoning to support regulatory compliance reporting.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Identitet",
      "AI",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "AI",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-simulate-alerts-for-sql-servers-on-machines",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": "2026-02-09",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Simulate alerts for SQL servers on machines",
    "summary": "February 9, 2026 Microsoft Defender for Cloud’s SQL simulated alerts is now generally available. Simulated alerts let security teams safely validate SQL protection, detections, and automated response workflows without introducing real risk. Simulated alerts generate realistic alerts with full SQL and machine context on Azure VMs or Arc-connected machines, enabling end-to-end testing of playbooks and SOC readiness. All alerts are produced locally using a safe script extension, with no external payloads or impact to production resources. Learn how to simulate alerts for SQL servers on machines.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Automatisering",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-02-09",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "unified-secops-02-new-content-types-for-cross-tenant-distribution-now-generally-available",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New content types for cross-tenant distribution now generally available",
    "summary": "The following content types are now generally available for distribution across multiple tenants in the Microsoft Defender multitenant portal: Analytics rules Automation rules Workbooks",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-external-mfa-is-generally-available",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - External MFA is Generally Available",
    "summary": "New feature Service category: MFA Product capability: User Authentication We're excited to announce that external authentication methods in Microsoft Entra ID is now generally available under a new name: External Multifactor Authentication (External MFA). This capability enables organizations to meet multifactor authentication requirements while continuing to use their preferred MFA provider. Microsoft Entra ID remains the identity control plane, performing full policy evaluation and access decisions on every sign in, including real time Conditional Access enforcement and sign in risk assessment.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-identity-inventory-enhancements-are-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Identity inventory enhancements are now generally available",
    "summary": "Accounts tab in Identity Inventory: The new **Accounts*- tab provides a consolidated view of all accounts associated with an identity, including accounts from Active Directory, Microsoft Entra ID, and supported non-Microsoft identity providers.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-client-credentials-in-microsoft-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Client Credentials in Microsoft Entra External ID",
    "summary": "New feature Service category: B2C - Consumer Identity Management Product capability: B2B/B2C We are pleased to announce the general availability of client credentials in Entra External ID. The OAuth 2.0 client credentials grant flow permits a web service (confidential client) to use its own credentials, instead of impersonating a user, to authenticate when calling another web service. Permissions are granted directly to the application itself by an administrator. Billing: When you configure machine-to-machine (M2M) authentication for Microsoft Entra External ID, you must use the M2M Premium add‑on. Review your organization’s premium add‑on usage policy to understand cost implications and ensure the implementation complies with internal governance and licensing guidelines.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-app-based-branding-via-branding-themes-in-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - App-based branding via Branding themes in Entra External ID",
    "summary": "New feature Service category: B2C - Consumer Identity Management Product capability: B2B/B2C In Entra External ID (EEID), customers can create a single, tenant-wide, customized branding experience that applies to all apps. We're introducing a concept of Branding \"themes\" to allow customers to create different branding experiences for specific applications. A new Live Preview feature also helps quickly visualize the changes before saving.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-entra-private-access-for-domain-controllers",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Entra Private Access for Domain Controllers",
    "summary": "New feature Service category: Private Access Product capability: Network Access Bring MFA to on‑premises applications when accessed from on‑premises, i.e., local‑to‑local access, while safeguarding domain controllers against identity threats. Enable secure access to private apps that use domain controllers for Kerberos authentication.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-cve-exceptions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "CVE exceptions",
    "summary": "Feature. feature: CVE exceptions. preview/ga: GA. description: CVE exceptions are now generally available, and also support the False positive justification and the status field as part of the response for the GET /api/vulnerabilities request.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 68,
    "tags": [
      "GA",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-07-defender-deployment-tool-for-linux",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender Deployment Tool for Linux",
    "summary": "Feature. feature: Defender Deployment Tool for Linux. preview/ga: GA. description: Available from Defender for Endpoint on Linux version 101.26042.0011 and later. The Defender Deployment Tool for Linux simplifies deployment by combining installation, onboarding, upgrades, and uninstallation into a single workflow. The tool automates prerequisite validation, supports custom installation paths, enables deployment of specific Defender versions from preferred update channels, and works seamlessly in environments that use local repositories. In addition to a simplified deployment experience, customers can now gain complete visibility into deployment progress through Device Timeline integration, providing step-by-step installation, upgrade, and onboarding status, Advanced Hunting queries for fleet-wide deployment monitoring, and detailed error reporting, including deployment stage, status, exit code, and failure reason to simplify troubleshooting. These capabilities help administrators quickly identify deployment issues, track onboarding progress, and understand deployment outcomes across their Linux estate. Available from Defender version 101.26042.0011 onwards.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Hunting",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Hunting",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-database-level-recommendations-for-sql-vulnerability-assessment-ga",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": "2026-07-26",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Database-level recommendations for SQL Vulnerability Assessment (GA)",
    "summary": "July 26, 2026 The SQL vulnerability assessment recommendations created as part of the transition from grouped to individual recommendations are now generally available. Each SQL vulnerability assessment rule is surfaced as its own recommendation, reported directly on the affected SQL database resource. For a deeper explanation of this change, see Transition from grouped to individual recommendations. For the mapping between the SQL VA rule ID and the new recommendations' GUID, see SQL vulnerability assessment rules and recommendations mapping. These recommendations affect the risk-based Cloud Score. They don't affect the classic Secure Score. If you're new to SQL Vulnerability Assessment, it scans your databases against Microsoft security best practices and common regulatory requirements, then reports each check as a recommendation on the scanned database. An unhealthy result flags a deviation from a best practice, which might be an unintended misconfiguration or a configuration that's intentional and acceptable for your environment, so review each finding in context before you act. You have three ways to remediate a finding: Fix the misconfiguration: apply the remediation steps or run the provided remediation script to bring the resource back to the recommended configuration. Approve it as a baseline: if the current state is by design, add the result to the baseline. Baselines are set per rule and per resource, so the finding is then reported as passed until a future scan detects a deviation. Exempt the recommendation: if the check isn't relevant to your organization, create an exemption at the subscription or management group level so it no longer affects your score or compliance for that scope. For the full walkthrough, see Ways to remediate a finding.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-07-26",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-discovery-and-posture-for-serverless-container-workloads-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": "2026-07-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Discovery and posture for serverless container workloads is now generally available",
    "summary": "July 1, 2026 Discovery and posture for serverless container workloads is now generally available in Microsoft Defender for Cloud. This capability provides inventory visibility, security recommendations for misconfigurations and vulnerability assessment findings, and attack path analysis for Azure Container Apps, Azure Container Instances, and Amazon Elastic Container Service (ECS) on AWS Fargate. Learn more about Discovery and posture for serverless container workloads.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-07-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-enhanced-exposure-score-in-defender-vulnerability-management",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced exposure score in Defender Vulnerability Management",
    "summary": "Feature. feature: Enhanced exposure score in Defender Vulnerability Management. preview/ga: GA. description: The new exposure score model in Defender Vulnerability Management is now generally available. This model improves risk prioritization and recommendation impact accuracy by incorporating exploit prediction data (EPSS) and asset context factors such as internet-facing status and criticality.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-general-availability-of-defender-for-key-vault-in-azure-government-cloud",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of Defender for Key Vault in Azure Government cloud",
    "summary": "June 30, 2026 With this general availability announcement, the Defender for Key Vault plan in Azure Government cloud now aligns with the commercial cloud offering in feature coverage and runtime protection capabilities.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-cloud-security-reporting-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Cloud security reporting is now generally available",
    "summary": "June 30, 2026 Cloud security reporting in Microsoft Defender portal is now generally available. You can create, customize, and share cloud security insights across your organization using built-in and custom reports. With this release, you can also customize cards when building custom reports, allowing you to tailor the data each card displays to match your specific reporting needs. Learn more about cloud security reporting.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-serverless-protection-for-azure-and-aws-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Serverless protection for Azure and AWS is now generally available",
    "summary": "June 1, 2026 Serverless protection for Azure and Amazon Web Services (AWS) is now generally available in Defender for Cloud. This capability helps you discover serverless resources and assess them for misconfigurations, vulnerabilities, and insecure dependencies across Azure Web Apps, Azure Functions, and AWS Lambda. Learn more about What is Serverless protection?, Serverless protection recommendations, and cloud support availability.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-06-insider-risk-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Insider Risk Management",
    "summary": "General availability (GA): Select which generative AI apps to monitor in Insider Risk Management policy indicators. For Microsoft Copilot experiences and Enterprise AI apps, you can now select or deselect generative AI apps for monitoring, reducing alert noise, and avoiding unnecessary pay-as-you-go billing charges.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-defender-endpoint-security-solution-for-windows-7-sp1-and-windows-server-2008-r2-sp1",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender endpoint security solution for Windows 7 SP1 and Windows Server 2008 R2 SP1",
    "summary": "Feature. feature: Defender endpoint security solution for Windows 7 SP1 and Windows Server 2008 R2 SP1. preview/ga: GA. description: The Defender for endpoint security solution for legacy Windows 7 SP1 and Windows Server 2008 R2 SP1 devices is now generally available. The solution provides advanced protection capabilities and improved functionality for these devices compared to other solutions. The solution is available using the Defender deployment tool.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-custom-data-collection",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Custom data collection",
    "summary": "Feature. feature: Custom data collection. preview/ga: GA. description: Custom data collection is now generally available. This feature enables organizations to expand and customize telemetry collection beyond default configurations with rule-based filtering for specific events from endpoint devices. The maximum event limit per rule has been updated from 25,000 to 75,000 events per device within a 24-hour rolling window.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-purview-05-data-security-posture-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Posture Management",
    "summary": "General availability (GA): The new version of Data Security Posture Management is now generally available. Partner solutions for non-Microsoft data sources remain in preview, as does the Data Security Posture Agent. This current version provides guided workflows for proactive risk management and streamlines data security operations so you can more confidently adopt AI across your digital estate. New: Support for administrative units, to bring parity with the classic versions of DSPM and DSPM for AI. New: To optimize resources, processing is paused for Microsoft 365 data when tenants are inactive for more than 60 days, and automatically resume when you return to the solution.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-04-automatic-windows-event-auditing-configuration-for-sensors-v3-x-is-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Automatic Windows event auditing configuration for sensors v3.x is now generally available",
    "summary": "The Automatic Windows event-auditing configuration for sensors v3.x is now generally available. Automatic Windows event-auditing streamlines deployment by automatically applying the required auditing settings to new sensors and correcting misconfigurations on existing ones.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-defender-for-containers-runtime-protection-on-eks-bottlerocket-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender for Containers runtime protection on EKS Bottlerocket is now generally available",
    "summary": "April 30, 2026 Defender for Containers runtime protection now supports AWS Bottlerocket operating systems on Amazon Elastic Kubernetes Service (EKS) in general availability. Learn more about Defender for Containers runtime protection.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-04-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-anti-malware-detection-and-blocking-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Anti-malware detection and blocking is now generally available",
    "summary": "April 30, 2026 Container runtime anti-malware detection and blocking is now generally available in Defender for Containers for Azure Kubernetes Service (AKS), Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine (GKE). Anti-malware detection and blocking detects and blocks malware when a container runs an executable that the system identifies as malicious software. You can define anti-malware policies that set conditions for alerts and blocking to distinguish legitimate activity from potential threats. Learn more about anti-malware detection and blocking.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-04-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-dns-detection-for-kubernetes-is-now-generally-available",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-30",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "DNS Detection for Kubernetes is now generally available",
    "summary": "April 30, 2026 DNS Detection for Kubernetes is now generally available in Defender for Containers for Azure Kubernetes Service (AKS), Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine (GKE). DNS Detection monitors DNS queries from containerized workloads to detect suspicious activity such as communication with malicious domains and DNS tunneling. The feature requires the Defender sensor deployed via Helm. Learn more about DNS Detection availability in Defender for Containers.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-04-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-general-availability-of-container-security-capabilities-in-azure-government-cloud",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of container security capabilities in Azure Government cloud",
    "summary": "April 1, 2026 The service helps U.S. federal and government agencies, including the Department of Defense (DoD) and civilian agencies, secure Kubernetes workloads by providing cloud security posture management, vulnerability assessment, and runtime threat protection for containerized environments. The Defender for Containers plan in Azure Government cloud now aligns with the commercial cloud offering in feature coverage, including agentless Kubernetes discovery, comprehensive inventory, attack path analysis, enhanced risk hunting, vulnerability assessment, compliance and runtime protection capabilities.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Hunting",
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Hunting",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-04-01",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-sentinel-04-entity-analyzer-is-now-generally-available",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Entity analyzer is now generally available",
    "summary": "Entity analyzer in the Microsoft Sentinel Model Context Protocol (MCP) data exploration tool collection lets you get out-of-the-box, explainable entity risk assessments for URLs and identities using threat intelligence, prevalence, and organizational context. Important Starting April 1, 2026, you're charged for the Security Compute Units (SCUs) required when using the entity analyzer.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-04-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-purview-04-shared-capabilities",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Shared capabilities",
    "summary": "General availability (GA): Export policy configuration as a ZIP file containing a point-in-time snapshot of all policy configurations in XML format for DLP and sensitivity label publishing policies. Use the export for support requests, configuration reference, and local analysis by using PowerShell or Microsoft 365 Copilot.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-suspected-pass-the-ticket-attack-alert-is-now-generally-available",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Suspected pass-the-ticket attack alert is now generally available",
    "summary": "The Suspected pass-the-ticket attack alert is now generally available. This alert was previously available in public preview as Pass-the-Ticket (PtT) attack.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-kubernetes-gated-deployment-support-for-aks-automatic-ga",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": "2026-03-12",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Kubernetes gated deployment support for AKS Automatic (GA)",
    "summary": "March 12, 2026 Kubernetes gated deployment is now generally available for AKS Automatic clusters. To use this capability, install the Defender for Containers sensor by using Helm in the kube-system namespace. If the sensor is currently installed through the AKS add-on, the Helm installation script disables the add-on and redeploys the sensor using Helm. The Helm installation scripts were updated to support deploying the sensor to the kube-system namespace on AKS Automatic clusters.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-03-12",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-improved-readability-for-authentication-methods-policy-update-audit-logs",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability – Improved readability for Authentication Methods Policy Update audit logs",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Starting in April 2026, the Authentication Methods Policy Update and Authentication Methods Policy Reset audit log activities has been updated to improve readability and clarity. Previously, audit logs included the full authentication methods policy payload in both the old and new values, even when only a small number of settings were changed. With this update, audit log entries now surface only the specific properties that were modified, along with their corresponding old and new values. Policy-wide updates—such as Registration Campaigns and System‑preferred authentication—may continue to include the full policy payload. The activity name and triggering events remain unchanged. This update affects formatting only and does not change policy behavior.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-purview-03-insider-risk-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Insider Risk Management",
    "summary": "In preview: Disable content download to create cases without content to reduce triage time. To get started, see Enable or disable content download. General availability (GA): Microsoft Fabric indicators now include Lakehouse indicators. General availability (GA): A new quick policy template for detecting data theft from non-Microsoft 365 apps by users leaving your organization is now available. General availability (GA): Pay-as-you-go usage reports provide transparency and enable more accurate budget planning and policy tuning. In preview: The agent summary tab in the Triage Agent in Insider Risk Management has been enhanced to intelligently distill user activity risk into meaningful risk pattern narratives, contextual filtering options, granular activity signals, and provide specific files within alerts.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-03-sensitivity-labels",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitivity labels",
    "summary": "General availability (GA): Manual labeling for OneNote, supported at the section level. Because retention labels also support labeling at the section level, you might find it helpful to review the architecture diagram for retention policies and retention labels. To enable the support for sensitivity labels, SharePoint and OneDrive must already be enabled for sensitivity labels, and then run the following PowerShell command: Set-SPOTenant -EnableSensitivityLabelforOneNote $true In preview: Auto-labeling policies introduce a new flow where you must decide whether to automatically apply a sensitivity label, or remove a label when the configured conditions apply for files in SharePoint and OneDrive. When you chose to automatically apply a sensitivity label, you can now optionally choose to always overriding an existing label that has a lower priority label, even if it was manually applied. This option was previously available for emails only and now extends to files in SharePoint and OneDrive. In preview: Viva Engage communities now support sensitivity labels applied to their underlying Microsoft 365 groups and connected SharePoint sites. The container label settings supported are privacy and guest access controls, to help you manage consistent protection with other groups and sites that support sensitivity labels. You can manually apply the label in Engage communities, and configure it in label policies as a default label for newly created communities. Documentation update: Now that container-level support for sensitivity labels include new collaborative workspaces such as Viva Engage communities and Loop workspaces, the previously titled article \"Use sensitivity labels to protect content in Microsoft Teams, Microsoft 365 groups, and SharePoint sites\" is now renamed Use sensitivity labels to protect collaborative workspaces (groups and sites).",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Container",
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Container",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-support-for-software-product-vulnerability-data-on-windows-7",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Support for software product vulnerability data on Windows 7",
    "summary": "Feature. feature: Support for software product vulnerability data on Windows 7. preview/ga: GA. description: To provide comprehensive vulnerability management capabilities across all supported Windows versions, Microsoft Defender Vulnerability Management now gathers software product vulnerability data on Windows 7 devices.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-effective-settings-tab",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Effective settings tab",
    "summary": "Feature. feature: Effective settings tab. preview/ga: GA. description: The Effective settings tab under the device inventory Configuration management tab is now generally available. In this tab, you can view the actual value and configuration source of each security setting on a device. This helps identify configuration attempts that didn't take effect and eliminates gaps where intended protections aren't enforced.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-sentinel-02-microsoft-sentinel-ueba-behaviors-layer-is-now-generally-available",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel UEBA behaviors layer is now generally available",
    "summary": "The UEBA behaviors layer in Microsoft Sentinel is now generally available, summarizing clear, human‑readable behavioral insights from high-volume, raw security logs. The behaviors layer aggregates and sequences related events into normalized behaviors, helping analysts more quickly understand who did what to whom without manually correlating raw logs.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-isolation-exclusions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Isolation exclusions",
    "summary": "Feature. feature: Isolation exclusions. preview/ga: GA. description: The Isolation exclusions feature is now generally available. Isolation exclusions allow designated processes or endpoints to bypass the restrictions of network isolation. This ensures that essential functions can continue while broader network exposure is limited.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "unified-secops-08-viewing-unified-rbac-in-multitenant-management-to-ga",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "August",
    "monthKey": "2025-08",
    "date": "August 2026",
    "publishedAt": "2025-08-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Viewing unified RBAC in multitenant management to GA",
    "summary": "Viewing unified role-based access control (RBAC) in the Microsoft Defender multitenant management portal is now generally available. This feature allows you to view a comprehensive view of permissions and access for your tenants. Creating and editing custom roles remains in preview.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-06-case-management-now-generally-available-in-the-defender-multitenant-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Juni",
    "monthKey": "2025-06",
    "date": "Juni 2026",
    "publishedAt": "2025-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Case management now generally available in the Defender multitenant portal",
    "summary": "The Microsoft Defender portal's case management feature is now generally available in the Defender multitenant portal.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-05-all-microsoft-sentinel-use-cases-generally-available-in-the-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "All Microsoft Sentinel use cases generally available in the Defender portal",
    "summary": "All Microsoft Sentinel use cases that are in general availability, including multi-tenant and multi-workspace capabilities and support for all government and commercial clouds, are now also supported for general availability in the Defender portal. We recommend that you onboard your workspaces to the Defender portal to take advantage of a single location for all your security operations.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-05-all-microsoft-sentinel-use-cases-generally-available-in-the-defender-portal",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "All Microsoft Sentinel use cases generally available in the Defender portal",
    "summary": "All Microsoft Sentinel use cases that are in general availability, including multitenant and multi-workspace capabilities and support for all government and commercial clouds, are now also supported for general availability in the Defender portal. We recommend that you onboard your workspaces to the Defender portal to take advantage of unified security operations.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-04-case-management-now-generally-available",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Case management now generally available",
    "summary": "The Microsoft Defender portal's case management feature is now generally available.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-04-microsoft-sentinel-solution-for-microsoft-business-apps-generally-available-in-the-azure-portal",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel solution for Microsoft Business Apps generally available in the Azure portal",
    "summary": "The Microsoft Sentinel solution for Microsoft Business Apps is now generally available in the Azure portal.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "GA",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 63,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-04-upcoming-change-migrate-from-microsoft-entra-connect-sync-to-microsoft-entra-cloud-sync",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Upcoming Change - Migrate from Microsoft Entra Connect Sync to Microsoft Entra Cloud Sync",
    "summary": "Plan for change Service category: Entra Connect Product capability: Entra Connect As organizations look to strengthen identity security and advance their Zero Trust strategies, many are looking for simpler, more reliable ways to manage hybrid identity. To support these needs, we’re beginning the transition from Microsoft Entra Connect Sync to the cloud‑native Microsoft Entra Cloud Sync - helping reduce on‑premises complexity while improving security, reliability, and day‑to‑day manageability. This shift is a key step toward a cloud-managed identity future that will provide a more secure, resilient, and easier-to-operate synchronization experience. As part of ongoing modernization efforts, Microsoft’s strategy remains to deliver stronger security, improved reliability, and simpler identity operations. What's next Beginning in July 2026, we will begin notifying customers through the M365 Message Center, Entra Connect Health, and targeted emails about their individual transition timelines. The transition will be rolled out in phases, and we will reach out directly to each organization when their assigned transition window begins. This phased approach ensures that we can provide tailored guidance and support to all our customers. Initial phases: In the first waves, we will focus on tenants for whom Entra Cloud Sync already meets all their identity synchronization needs. If your organization relies on advanced features or has a large directory, you will not be among the initial targeted groups. We will prioritize early transitions for customers with straightforward configurations that are fully supported by Entra Cloud Sync’s current capabilities. Subsequent phases: As Entra Cloud Sync’s capabilities expand, we will progressively notify the later groups and ensure they can transition successfully once equivalent support is available in Entra Cloud Sync We are committed to supporting you by providing tooling and documentation for the transition to Entra Cloud Sync. What's changing Once your organization is notified of its assigned transition window, you will receive detailed guidance and resources to help you begin the move to Entra Cloud Sync. During this period: You will have review your current configuration, assess readiness, and familiarize yourself with Cloud Sync’s capabilities. You will gain access to the transition tool and step-by-step documentation to support a smooth transition. You will move and test your synchronization environment in Entra Cloud Sync before any permanent changes are made. Once your transition to Entra Cloud Sync is successfully completed: Entra Cloud Sync will be the primary mechanism for identity synchronization capabilities between Active Directory and Entra ID, replacing the identity sync functionality in Entra Connect tool. What's not changing Once you migrate to Cloud Sync, your hybrid authentication features that enable on‑premises credentials to be used for accessing cloud resources will continue to be available after migration on the Connect Sync config wizard. Start preparing today We recommend that you take steps to begin your migration. You can begin familiarizing yourself with Entra Cloud Sync and review our dedicated resources to ensure a smooth transition: Cloud Sync deep dive – how it works Step-by-step migration guidance Migration scenarios: Migrate to Microsoft Entra Cloud Sync for a synced Active Directory forest Migrate Microsoft Entra Connect Sync Group Writeback v2 to Microsoft Entra Cloud Sync Microsoft Entra Cloud Sync vs. Microsoft Entra Connect Sync feature comparison Microsoft Entra supports Source of Authority (SOA) capabilities that allow you to shift user and group management to the cloud while continuing to operate existing Connect Sync deployments. These capabilities can help simplify environments, reduce long‑term dependency on on‑prem infrastructure, and improve readiness for future transitions. If this aligns with your identity strategy, the following resources may be helpful: IT Architect Guidance for SOA planning: https://aka.ms/SOAITArchitectsGuidance User SOA: Manage users directly in Entra ID while maintaining hybrid coexistence Group SOA: Cloud‑managed groups with on‑premises impact where required This is not a prerequisite to move to Cloud Sync, but provides an opportunity to prepare at your own pace. Stay tuned to this page for further updates.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 60,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-plan-for-change-switch-from-basic-auth-to-workload-identity-based-auth-for-sap-successfactors-provisioning-integrations",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Plan for change - Switch from basic auth to workload identity based auth for SAP SuccessFactors provisioning integrations",
    "summary": "Plan for change Service category: Provisioning Product capability: Inbound to Entra ID Microsoft Entra is introducing workload identity–based authentication for SAP SuccessFactors provisioning. This new capability allows the Microsoft Entra provisioning service to authenticate to SAP SuccessFactors using Entra workload identity and short‑lived tokens instead of static credentials (username and password). This change helps customers transition to a more secure authentication model in preparation for SAP’s plan to deprecate basic authentication for SuccessFactors APIs by November 2026. What's changing A new authentication option will be available starting May 2026 in the SAP SuccessFactors provisioning apps to use Entra workload identity-based authentication instead of basic authentication. Customers can switch existing provisioning configurations from basic authentication to workload identity–based authentication directly through updated connectivity settings in the provisioning experience, without needing to recreate or restart their configuration. This method removes the need to store long-lived credentials and uses a standards-based authentication method between Entra and SAP SuccessFactors through SAP Cloud Identity Services. This capability applies to the following provisioning scenarios: SAP SuccessFactors to Active Directory user provisioning SAP SuccessFactors to Microsoft Entra ID user provisioning SAP SuccessFactors writeback (Entra to SuccessFactors) What this means for you If you are currently using basic authentication for any of the above SAP SuccessFactors provisioning integrations, you must upgrade to workload identity-based authentication before November 2026 to ensure uninterrupted operation of the integrations. No immediate action is required, but we recommend planning your migration early to avoid last-minute disruption. The new method improves security by: Eliminating stored passwords Using short-lived, verifiable tokens Aligning with SAP’s supported authentication model Recommended action Evaluate the new authentication option once available in your tenant Plan and test migration of existing provisioning jobs to workload identity-based authentication Update any internal documentation or operational processes that reference basic authentication Additional information Detailed configuration guidance and step-by-step instructions will be published in Microsoft Learn documentation.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 60,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Automatisering",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-migrate-defender-for-identity-sensors-from-v2-x-to-v3-x",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Migrate Defender for Identity sensors from v2.x to v3.x",
    "summary": "You can now migrate Defender for Identity sensors from v2.x to v3.x directly from the Microsoft Defender portal. The v2.x sensor continues running during the migration until the v3.x sensor is ready, so there's no downtime. Eligible servers appear as Ready for migration on the Sensors page, and migration takes up to 20 minutes.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 60,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-11-integration-of-microsoft-defender-for-cloud-s-cspm-capabilities-and-microsoft-defender-vulnerability-management-into-exposure-management",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Integration of Microsoft Defender for Cloud’s CSPM capabilities and Microsoft Defender Vulnerability Management into Exposure Management",
    "summary": "This major milestone brings comprehensive Microsoft Defender for Cloud’s posture capabilities (secure score, recommendations, and attack paths) and vulnerability management integration to Microsoft Security Exposure Management, which significantly expands the scope and capabilities of the platform. Unified portal experience – All exposure management and vulnerability management functions are now accessible in the Microsoft Defender portal at security.microsoft.com under the Exposure Management section. New unified recommendations catalog One place, full coverage – You can now explore all Microsoft security recommendations in a single, streamlined experience that consolidates recommendations from: Microsoft secure score Microsoft Security Exposure Management recommendations catalog Microsoft Defender for Cloud Microsoft Defender for Vulnerability Management Organized by attack surfaces – The catalog is divided into tabs based on attack surfaces: Devices - Including separate views for Misconfigurations and Vulnerabilities Cloud – Including multicloud (Azure, AWS, GCP), hybrid, and code recommendations Identity - Identity protection recommendations SaaS Apps - Software-as-a-Service application recommendations Data - Data security recommendations Enhanced capabilities – Each tab incorporates unified fields and functionalities from previous experiences, providing consistent and efficient ways to discover, evaluate, and prioritize security recommendations. Devices misconfigurations and vulnerabilities Separated workflows – For the first time, misconfiguration recommendations are separated from vulnerabilities, recognizing they represent distinct workflows handled by different personas. Devices Misconfigurations: Configuration issues from Vulnerability Management, Microsoft Secure Score, and Security Exposure Management, contributing to Devices Secure Score. Devices Vulnerabilities: Software vulnerabilities from Vulnerability Management with the same exposure score and prioritization logic customers know, preserving familiar structure and workflows. Cloud Resources with risk-based prioritization Risk-focused approach – For the first time in the Defender portal, cloud recommendations are prioritized by risk, helping customers focus on what matters most. The view includes: Risk factors per asset for broader exposure context New risk-based scoring that weighs recommendations based on severity, asset context, and potential impact Enhanced recommendation data from Azure Security Center enriched with Exposure Management capabilities New secure score integration Side-by-side scoring – Both Microsoft secure score and the newly introduced Cloud secure score are now available in Security Exposure Management, viewable side by side for comprehensive posture tracking. Enhanced Attack Path analysis Hybrid scenarios – Attack paths now include hybrid scenarios spanning on-premises and cloud contexts, enabling security teams to identify attack vectors that traverse between environments. Microsoft Defender Vulnerability Management integration New home under Exposure Management – Vulnerability Management experiences now reside in Exposure Management, including: Overview dashboard (focusing on vulnerabilities only) Vulnerabilities (weaknesses) with side-by-side Devices and Cloud views Remediation workflows Inventories and baseline assessment Vulnerability Management Recommendations migrated to unified recommendations page Event timeline accessible via events widget Unified vulnerability view – Customers with both Defender for Cloud and Defender for Endpoint licenses can now see all vulnerabilities affecting their digital estate in one place. Learn more about the integration with Microsoft Vulnerability Management and the specific changes to the Microsoft Vulnerability Management experience. Expanded Critical Asset Management Comprehensive coverage – Critical asset management now covers the unified inventory spanning endpoints, cloud resources, and external assets discovered through third-party integrations.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Endpoint",
      "Teams",
      "Cloud",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 60,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint",
      "Teams",
      "Cloud",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-external-users-can-be-directly-assigned-to-access-packages",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - External users can be directly assigned to Access Packages",
    "summary": "New feature Service category: Entitlement Management Product capability: Identity Governance This feature allows Entitlement Management admins to directly assign external users who are not in the directory to an access package using the user's email. Users are invited into the tenant as Guest users and are governed (as long as Entra ID Governance is configured).",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-microsoft-entra-kerberos-key-rotation-improved-reliability-for-incoming-trust-referral-flows",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability - Microsoft Entra Kerberos key rotation improved reliability for incoming trust referral flows",
    "summary": "Changed feature Service category: Authentications (Logins) Product capability: User Authentication General availability of Microsoft Entra Kerberos key rotation improved reliability particularly for environments using incoming trust referral flows. Previously, authentication failures could occur during Kerberos key rotation if referral tickets were encrypted with a secondary key. The update enhances validation logic to attempt decryption with both primary and secondary Kerberos keys, improving resiliency during key rollover operations and reducing authentication disruption during rotation events.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-general-availability-domainless-saml-idp-federation-for-workforce-tenants",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Domainless SAML IdP federation for workforce tenants",
    "summary": "New feature Service category: B2B Product capability: B2B/B2C Domainless SAML federation with a SAML Identity Provider allows external users to authenticate into your apps or workforce resources using their IdP-managed credentials, regardless of their email domain. Domainless federation removes the need for domain matching between the user's email and preconfigured IdP domains during sign-in or invitation redemption. Learn more at Add a SAML/WS-Fed identity provider - Microsoft Entra External ID.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-netbiosname-resolution-test-now-informational",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - NetBiosName resolution test now informational",
    "summary": "Changed feature Service category: Entra Connect Product capability: Entra Connect The “NetBIOS Name Sysvol Connectivity resolution” test in the AD DS health monitoring agent has been reclassified from an alerting test to an informational test. Going forward, if this test fails, it will no longer generate an alert or require remediation action on your part. Instead, the test runs in the background and logs results for your information only. What Changed The NetBIOS Name Sysvol Connectivity test is now informational-only. Previously, when this test failed (e.g. if a domain controller couldn’t resolve the NetBIOS name to access its SYSVOL share), an alert was triggered in Connect Health, prompting you for action. Now, failures in this test will not raise an alert in Microsoft Entra Connect Health. Why We Made This Change NetBIOS is a legacy networking protocol that is not critical in modern Active Directory environments. Many organizations no longer rely on NetBIOS name resolution in day-to-day operations. Reclassifying this test as informational reduces noise in your alert feed and allows you to focus on issues that are genuinely critical to your identity infrastructure. In short, we want to ensure that Connect Health alerts highlight meaningful issues and help you prioritize real problems, rather than flagging non-essential conditions.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-cross-tenant-group-synchronization",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Cross tenant group synchronization",
    "summary": "General Availability Service category: Provisioning Product capability: Identity Lifecycle Management Cross tenant group synchronization allows organizations to synchronize security groups across Microsoft Entra tenants. This feature enables centralized management of group membership in a source tenant while making those groups available in one or more target tenants, simplifying cross-tenant collaboration and reducing administrative overhead associated with managing duplicate groups. With cross tenant group synchronization, organizations can extend their existing cross tenant synchronization configurations to include groups, supporting scenarios such as shared application access, resource authorization, and consistent group-based access control across tenants. Admins can opt in to this functionality and configure attribute mappings and cross tenant access policies to enable group synchronization into target tenants. Use of cross-tenant group synchronization requires Microsoft Entra ID Governance licenses. Existing licensing requirements for cross tenant user synchronization features remains unchanged. https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-overview.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-general-availability-manage-agent-id-sponsorship-lifecycle-with-lifecycle-workflows",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Manage Agent ID sponsorship lifecycle with Lifecycle Workflows",
    "summary": "General Availability Service category: Lifecycle Workflows Product capability: Identity Governance One of the most important parts of governing agent identities is making sure that a delegated human user is always assigned to make sure the agent identity's access to resources are current. If the sponsor is leaving the organization, sponsorship of the agent identities is automatically transferred to their manager. With sponsorship transferred, there's always a human user accountable for managing the access and lifecycle of the agent identities. Microsoft Entra ID Governance features can help streamline this process within your organization. Lifecycle workflows include multiple tasks around notifying cosponsors, and managers of sponsors, of impending sponsorship changes. For a guide on setting up a workflow for agent identities sponsors, see: Agent identity sponsor tasks in Lifecycle Workflows.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "AI",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-general-availability-of-defender-for-storage-integration-in-azure-portal-storage-center",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": "2026-04-20",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General availability of Defender for Storage integration in Azure portal Storage Center",
    "summary": "April 20, 2026 This integration brings Defender for Storage insights directly into the native storage management experience. This approach makes it easier for customers to understand and improve their storage security posture at scale. Customers can now view Defender for Storage threat protection and security posture coverage directly in Storage Center, next to their storage resources. Storage Center provides a centralized, storage-native view of Defender for Storage protection status. This view helps customers quickly understand: Which storage accounts are protected, partly protected, or not protected Where malware scanning, activity monitoring, and sensitive data discovery are enabled Where security gaps exist across Azure Blob Storage and Azure Files storage Learn more about Azure storage.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Ikrafttredelse: 2026-04-20",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-prefetch-workday-termination-data-to-customize-account-disable-logic",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Prefetch Workday termination data to customize account disable logic",
    "summary": "General Availability Service category: Provisioning Product capability: Inbound to Entra ID This Workday connector update resolves termination processing delays observed for workers in APAC and ANZ regions. Admins can now enable termination lookahead setting to prefetch data and tailor deprovisioning logic for accounts in Microsoft Entra ID and on-premises Active Directory. For more details, refer to: https://aka.ms/WorkdayTerminationLookaheadDoc",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-microsoft-identity-manager-mim-2016-service-pack-3-sp3",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Identity Manager (MIM) 2016 Service Pack 3 (SP3)",
    "summary": "General Availability Service category: Microsoft Identity Manager Product capability: Identity Governance Microsoft Identity Manager (MIM) 2016 Service Pack 3 (SP3) is now available. SP3 focuses on stability and supportability, modernizes compatibility with current platform components (SQL Server, SharePoint, and Exchange), and adds an additional deployment option for the Synchronization Service by enabling Azure SQL Database with managed identity authentication—helping reduce operational risk for hybrid identity environments. Issues fixed and improvements added in this update include MIM Synchronization Service SQL Server 2022 Support: Full support for installation with and connection to SQL Server 2022. Azure SQL Support: MIM Sync can now use Azure SQL Database, with authentication supported via both System Assigned and User Assigned Managed Identities. MIM Service and Portal SQL Server 2022 and Exchange Server Subscription Edition (SE) Support: Updated integration and database compatibility with the latest SQL and Exchange releases. SharePoint Subscription Edition (SE) Support: The MIM Portal can now be deployed on SharePoint SE. System Center Service Manager Data Warehouse (DW) 2022 Support: Enables reporting and audit integration with the latest SCSM DW. Active Directory Federation Services (AD FS) Single Sign-On (SSO): Introduces support for claims-based authentication, allowing end-users to sign in via AD FS instead of Windows Integrated Authentication Download and upgrade information Based on your licensing, you can download the installer packages here: Microsoft Identity Manager licensing and downloads | Microsoft Learn SP3 introduces a new upgrade process. Please follow the documented steps carefully: Upgrade Microsoft Identity Manager 2016 from SP2 to SP3 | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-entra-cba-certificate-authority-ca-scoping",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Entra CBA Certificate Authority (CA) scoping",
    "summary": "General Availability Service category: Authentications (Logins) Product capability: User Authentication Entra CBA Certificate Authority (CA) scoping in Microsoft Entra allows tenant administrators to restrict the use of specific certificate authorities (CAs) to defined user groups. This feature enhances the security and manageability of certificate-based authentication (CBA) by ensuring that only authorized users can authenticate using certificates issued by specific CAs. More information at Certificate Authority (CA) scoping",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-enabling-social-identity-providers-in-entra-external-id-native-authentication-via-browser-delegated-web-view-flows-using-sdks-for-applications",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability – Enabling Social Identity Providers in Entra External ID Native Authentication via browser‑delegated (web‑view) flows using SDKs for applications",
    "summary": "General Availability Service category: B2C - Consumer Identity Management Product capability: Developer Experience Build secure sign‑in and sign‑up experiences for applications in Entra External ID using Native Authentication, with Social Identity Provider support such as Google, Facebook, and Apple available through browser‑delegated (web‑view) authentication using developer‑friendly SDKs.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-license-usage",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - License Usage",
    "summary": "General Availability Service category: Reporting Product capability: Monitoring & Reporting The License Usage page in the Microsoft Entra admin center helps customers optimize their Entra licenses by providing visibility into feature usage across their tenant. It shows how many Entra ID P1, P2, and Suite licenses you own, along with usage of key features such as Conditional Access and risk‑based Conditional Access mapped to each license type. You can also review usage trends over the past six months. This view gives you a clearer understanding of your license footprint, the value you’re deriving from Entra, and potential over‑usage risks within your tenant.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-scim-2-0-apis-for-microsoft-entra-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - SCIM 2.0 APIs for Microsoft Entra ID",
    "summary": "General Availability Service category: Provisioning Product capability: Identity Lifecycle Management SCIM 2.0 APIs give customers, developers, and partners a standards-based option for managing users and groups in Microsoft Entra using the System for Cross-domain Identity Management (SCIM) 2.0 specification.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-tenant-configuration-management-apis",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Tenant configuration management APIs",
    "summary": "General Availability Service category: Tenant Governance Product capability: Tenant Governance Tenant Configuration Management APIs allow organizations to take snapshots of their tenants' current configuration settings in a JSON format and to enforce configuration settings by offering continuous monitoring of drifts.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Automatisering",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Automatisering",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-expanded-attribute-support-in-lifecycle-workflows-attribute-changes-trigger",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Expanded attribute support in Lifecycle Workflows attribute changes trigger",
    "summary": "New feature Service category: Lifecycle Workflows Product capability: Identity Governance The Attribute Changes trigger in Lifecycle Workflows now supports additional attribute types, enabling broader detection of organizational changes. Previously, this trigger was limited to a set of core attributes. With this update, you can configure workflows to respond when any of the following attributes change: Custom security attributes Directory extension attributes EmployeeOrgData attributes On-premises attributes 1–15 This enhancement gives administrators greater flexibility to automate lifecycle processes for mover events based on custom or extended attributes, improving governance for complex organizational structures and hybrid environments.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-delegated-workflow-management-in-lifecycle-workflows",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Delegated Workflow Management in Lifecycle Workflows",
    "summary": "New feature Service category: Lifecycle Workflows Product capability: Identity Governance Lifecycle workflows can now be managed with Administrative Units (AUs), enabling organizations to segment workflows and delegate administration to specific admins. This enhancement ensures that only authorized admins can view, configure, and execute workflows relevant to their scope. Customers are able to associate workflows with AUs, assign scoped permissions to delegated admins, and ensure that workflows only impact users within their defined scope.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-device-authorization-grant-flow-in-microsoft-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Device authorization grant flow in Microsoft Entra External ID",
    "summary": "New feature Service category: B2C - Consumer Identity Management Product capability: B2B/B2C Similar to Microsoft Entra ID (workforce tenants), Microsoft Entra External ID (external tenants) now supports device authorization grant flow, which allows users to sign in to input-constrained devices such as a smart TV, IoT device, or a printer.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-sign-in-with-username-alias",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Sign-in with username/alias",
    "summary": "New feature Service category: B2C - Consumer Identity Management Product capability: B2B/B2C In Microsoft Entra External ID (EEID), users who authenticate with a local email and password now can also sign in using a username (alias) as an alternate sign-in identifier. This alias can represent a customer or member ID, insurance number, frequent flyer number, or a self-chosen username. The alias can be collected from user or assigned during self-service sign-up, or assigned during user creation or user update via the Microsoft Graph API or Microsoft Entra admin center. For details, see Sign in with alias.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-custom-banned-password-lists-supported-in-microsoft-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Custom banned password lists supported in Microsoft Entra External ID",
    "summary": "New feature Service category: B2C - Consumer Identity Management Product capability: B2B/B2C In addition to the global banned password lists already supported, EEID admins can now add specific strings to block during password creation and reset.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-custom-block-pages",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Custom Block pages",
    "summary": "New feature Service category: Internet Access Product capability: Network Access When you configure policies blocking your users from accessing a risky, NSFW, or unsanctioned sites or apps in GSA, they receive a clear HTML error message with Microsoft Entra Internet Access branding. We’ve heard from many admins that they’d like to start customizing that experience with text aligned to a company style guide, callouts to company Terms of Use documentation, hyperlinks to IT workflows, and more. Global Secure Access now offers customized block pages for Internet Access. In the Microsoft Graph API, Admins can now: Configure the tenant-wide body text of the GSA block page. Add hyperlinks via limited markdown to reference Terms of Use, ServiceNow/IT ticketing services, or even MyAccess for ID Governance workflow integration.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-microsoft-entra-provisioning-service-available-in-microsoft-azure-operated-by-21vianet",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra Provisioning Service available in Microsoft Azure operated by 21Vianet",
    "summary": "New feature Service category: Provisioning Product capability: Outbound to SaaS Applications The Microsoft Entra provisioning service can be used in the 21Vianet / China cloud for the following scenarios: API-driven provisioning, Cloud Sync, Cross-tenant sync between China tenants, SCIM provisioning for the non-gallery / custom application, and on-premises app provisioning (ECMA). Specific gallery connectors such as Workday, SuccessFactors, and AWS aren't onboarded to the environment.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-general-availability-revoke-previously-approved-access-package-assignments-in-my-access",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Revoke previously approved access package assignments in My Access",
    "summary": "New feature Service category: Entitlement Management Product capability: Identity Governance By end of March Microsoft Entra ID Governance approvers can now revoke access to an access package after an approval has already been granted. This gives approvers greater control to respond to changes, mistakes, or updated business needs. With this update, an approver can undo a prior approval decision, immediately removing the requestor’s access to the access package. Only the approver who originally approved the request can revoke it, even if multiple approvers belong to the same approver group.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-microsoft-entra-id-governance-guest-billing-meter-enforcement",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Microsoft Entra ID Governance guest billing meter enforcement",
    "summary": "New feature Service category: Entitlement Management, Lifecycle Workflows Product capability: Entitlement Management, Lifecycle Workflows Enforcement for the Microsoft Entra ID Governance guest billing meter is now in effect for Entitlement Management and Lifecycle Workflows (Access Reviews will be enforced later in CY26 Q1). To keep using Entra ID Governance premium features for guest users in workforce tenants, you must link a valid Azure subscription to activate the Microsoft Entra ID Governance for guests add-on. If a subscription isn’t linked, creation or updates of new guest-scoped governance configurations will be restricted (for example, certain access package policies, access reviews, and lifecycle workflows), and guest-specific governance actions may fail until billing is configured.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-session-control-conditional-access-policies-in-entra-external-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Session Control Conditional Access Policies in Entra External ID",
    "summary": "New feature Service category: Conditional Access Product capability: B2B/B2C EEID admins can configure persistent browser session and sign‑in frequency in Conditional Access.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-improved-enforcement-for-all-resources-policies-with-resource-exclusions",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Improved enforcement for All resources policies with resource exclusions",
    "summary": "Changed feature Service category: Conditional Access Product capability: Access Control Microsoft Entra Conditional Access is strengthening how policies that target All resources with resource exclusions are enforced in a narrow set of authentication flows. After this change, in user sign‑ins where a client application requests only OIDC or specific directory scopes, Conditional Access policies that target All resources with one or more resource exclusions, or policies that explicitly target Azure AD Graph, will be enforced. This ensures that policies are consistently applied regardless of the scope set requested by the client application.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 58,
    "tags": [
      "GA",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-migrate-windows-server-2025-domain-controllers-to-sensor-v3-x",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Migrate Windows Server 2025 domain controllers to sensor v3.x",
    "summary": "You can now migrate domain controllers running Windows Server 2025 from sensor v2.x to sensor v3.x.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Endpoint",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 55,
    "tags": [
      "Ikke oppgitt",
      "Endpoint",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-migration-readiness-reasons-on-the-sensors-page",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Migration readiness reasons on the Sensors page",
    "summary": "When a server is marked Not ready for migration on the Sensors page, you can now hover over the status to see a tooltip that lists the specific reasons the server doesn't meet the migration prerequisites.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Lifecycle"
    ],
    "platforms": [],
    "priorityScore": 55,
    "tags": [
      "Ikke oppgitt",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-05-known-limitation-migration-of-domain-controllers-with-windows-server-2025-from-sensor-v2-x-to-sensor-v3-x-is-not-supported",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Known limitation: Migration of domain controllers with Windows Server 2025 from sensor v2.x to sensor v3.x is not supported",
    "summary": "Migrating domain controllers running Windows Server 2025 to sensor v3.x isn't currently supported. Continue using the v2.x sensor on Windows Server 2025 domain controllers until support for migration to v3.x is available.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
    "impactLevel": "Høy",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Endpoint",
      "Lifecycle"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 55,
    "tags": [
      "Ikke oppgitt",
      "Endpoint",
      "Lifecycle"
    ],
    "analysis": [
      "Høy operasjonell påvirkning: bør vurderes raskt for migrering, deteksjoner eller arbeidsflyt.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-expanded-saas-app-support-in-password-protection-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expanded SaaS app support in Password protection (Preview)",
    "summary": "The Password protection page now includes password risks from SaaS apps connected through Microsoft Defender for Cloud Apps, in addition to Active Directory, Microsoft Entra ID, and Okta. SaaS apps that support SaaS Security Posture Management (SSPM), such as Salesforce and ServiceNow, appear on the Password Hygiene and Password Policies tabs. Each SaaS app requires a Defender for Cloud Apps app connector.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-sentinel-07-custom-detection-rules-support-in-microsoft-sentinel-repositories-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Custom detection rules support in Microsoft Sentinel Repositories (Preview)",
    "summary": "You can now manage custom detection rules as code in your GitHub or Azure DevOps repository using the Microsoft Security BICEP extension. Sync custom detection rules to Microsoft Sentinel using the Repositories feature, or deploy them directly using BICEP CLI.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-purview-07-data-loss-prevention",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Loss Prevention",
    "summary": "In preview: Protect sensitive data in text and prompts by integrating with Microsoft Entra Global Secure Access (GSA). This integration enables organizations to intercept and inspect text and AI interactions at the network layer, enforce restrictive actions based on DLP policies, and detect risky user activity through Insider Risk Management. It helps prevent sensitive data from being shared with untrusted cloud applications through browsers, apps, APIs, and add-ins, including generative AI platforms, social media, and collaborative platforms. See Learn about Microsoft Purview Network Data Security.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Identitet",
      "Automatisering",
      "AI",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "AI",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-07-insider-risk-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Insider Risk Management",
    "summary": "In preview: Unified alert experience combines the Triage Agent and Standard alert dashboards into a single alerts list page. View and manage both classic and agent-triaged alerts from one location, with the ability to preview agent summaries, alert and user details directly on the alerts list page. In preview: Expanded user profile details in the unified alert experience add additional user profile signals from Microsoft Entra, including office location, employee type, department, and last working date. In preview: Expanded note capabilities across alerts and cases. Analysts and investigators can now add and view notes on both alerts and cases. System-generated notes are automatically applied when there's a change in alert or case status, assigned user, closure, or case escalation.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-enhanced-defender-deployment-tool-for-windows",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced Defender deployment tool for Windows",
    "summary": "Feature. feature: Enhanced Defender deployment tool for Windows. preview/ga: GA. description: The new version of the tool streamlines onboarding and enhances security by:- Bundling the onboarding package directly into the tool's executable.- Generating a key during deployment package creation that is required for running the tool.- Enabling users to configure an expiry date for the package to reduce the risk of unauthorized use.In addition:- You have the option of downloading the package as either an .exe or a .zip file, whichever best suits your organization's needs.- A new Deployment packages page in the Defender portal facilitates management of downloaded packages by providing centralized visibility into all the packages and their current status.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-new-microsoft-secure-score-recommendation",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendation",
    "summary": "Feature. feature: New Microsoft Secure Score recommendation. preview/ga: GA. description: Microsoft Secure Score now includes the Reduce unnecessary inbound internet exposure on internet-facing devices recommendation, which helps identify devices that are accessible from the public internet and may represent unnecessary attack surface.Internet-facing devices are primary entry points for attackers and automated scanners, making them prime targets for credential brute-forcing, exploitation of unpatched vulnerabilities, and initial access for ransomware and hands-on-keyboard intrusions.This recommendation provides centralized visibility into internet-facing devices across the environment, enabling organizations to validate whether exposure is expected, prioritize remediation for unintended exposure, and reduce external attack surface at scale.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-06-nhi-inventory-enhancements-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "NHI inventory enhancements (Preview)",
    "summary": "Expanded Entra ID inventory: The non-human identity inventory now includes all Microsoft Entra service principals, not just those with API permissions.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-06-visibility-into-service-principals-used-by-ai-agents-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Visibility into service principals used by AI agents (Preview)",
    "summary": "The non-human identity inventory now identifies which Entra ID service principals are used by AI agents. A new \"Used by AI agents\" column and insight card help you find and prioritize these identities.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-new-multicloud-security-recommendations-now-in-public-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-09",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New multicloud security recommendations now in public preview",
    "summary": "June 9, 2026 More than 60 multicloud security recommendations are now available in public preview. These recommendations add coverage across AWS services including AppFlow, AppStream, AppSync, Athena, Auto Scaling, CodeBuild, Cognito, Comprehend, DMS, DataSync, FSx, Kendra, Keyspaces, Kinesis, MQ, Neptune, and QuickSight. The new recommendations span data security, identity and access, networking, compute, and container categories, helping you assess encryption, access control, logging, network exposure, backup, and workload hardening scenarios across your multicloud estate. Additional preview recommendations were added for Amazon MSK and OpenSearch Service (covering TLS enforcement, public access, unauthenticated access, encryption, audit logging, fine-grained access control, VPC access, customer-managed keys, and service update hygiene), along with GCP networking recommendations for App Engine SSL certificate expiration and DNS authorization on Google-managed certificates. For a full list of available recommendations, see Security recommendations.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-09",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-06-public-preview-extended-conditional-access-protections-for-agent-s-user-accounts",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Extended Conditional Access protections for Agent's user accounts",
    "summary": "New feature Service category: Conditional Access Product capability: Identity Security & Protection Conditional Access now provides broader controls to secure AI agents that have a user account. Administrators can: Target agent's user accounts with greater precision by including or excluding individual agents or dynamically grouping agents using Custom Security Attributes. Protect against risky agent activity by applying Conditional Access policies based on Agent Risk. Require compliant devices for agents running on managed endpoints, including Windows 365 for Agents, ensuring agents can only operate from devices that meet your organization's compliance requirements. Apply device platforms, filter for devices and compliant network conditions to agents running on endpoints, enabling policies based on device state and trusted network locations. These capabilities extend Zero Trust protections to agent's user accounts while leveraging the familiar Conditional Access policy experience.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-public-preview-new-built-in-entra-role-for-soc-identity-response-in-microsoft-defender",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - New built-in Entra role for SOC identity response in Microsoft Defender",
    "summary": "New feature Service category: RBAC Product capability: Identity Security & Protection Starting June 8 we're introducing a new built-in role in Microsoft Entra—SOC Identity Responder—to further improve how security teams execute identity containment actions initiated from Microsoft Defender using a least-privilege access model. Previously, performing these actions required SOC analysts to hold multiple high-privilege Entra roles or depend on identity administrators, creating delays during active investigations. With this update, SOC analysts can be assigned a dedicated role purpose-built for identity response actions, allowing them to perform key actions—such as disabling users, revoking sessions, and forcing password resets—without being granted broad directory administrative privileges. Access to this role supports flexible assignment models, including role-assignable groups for managing permissions through group membership and delegated ownership. Optional integration with Privileged Identity Management (PIM) enables just-in-time activation and enhanced governance controls. These actions continue to be enforced and audited by Microsoft Entra, ensuring consistency with existing RBAC and compliance controls.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Teams",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Teams",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-06-public-preview-prevent-unauthorized-changes-to-ad-groups-with-ad-group-enforcement",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Prevent unauthorized changes to AD groups with AD group enforcement",
    "summary": "New feature Service category: Provisioning Product capability: Entra Cloud Sync For customers leveraging group provisioning to AD, this capability ensures that changes to AD groups remain consistent with those managed in Microsoft Entra. With this preview, you can designate specific AD groups so that modifications to those groups can only be made through the Entra provisioning service. Changes made outside of Entra are blocked, helping prevent drift before it occurs and maintaining alignment between Entra ID and AD groups. Learn more: AD group enforcement documentation.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-purview-06-copilot-cowork",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Copilot Cowork",
    "summary": "General availability (GA): Data security and compliance protections for Microsoft 365 Copilot Cowork",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "AI"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-06-data-loss-prevention",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Loss Prevention",
    "summary": "New: Access Endpoint DLP device attribute data using Advanced Hunting. Query Endpoint DLP device configuration and policy sync attributes at scale through the DeviceInfo table's DlpInfo column in Advanced hunting in the Microsoft Defender portal, instead of relying on point-in-time exports from the Microsoft Purview portal. New: Create a DLP policy that uses device scoping. Scope an Endpoint DLP policy to specific device groups — for example, enforce policy only when Finance users access data from Windows devices, and not when the same users work from macOS — using dynamic device groups defined in Microsoft Entra ID. In preview: New Email is received from > External users condition for the Microsoft 365 Copilot and Copilot Chat policy location lets DLP policies prevent Copilot from using external email as grounding data, helping reduce prompt injection risk from untrusted senders. See Block external email from being processed (preview). In preview: Enhanced matched conditions for Exchange DLP events surfaces detailed non-sensitive information type (SIT) condition matches in DLP alerts and Activity Explorer for Exchange Online. Each matched condition includes the condition name, matched value, and source.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Identitet",
      "Hunting",
      "AI",
      "Endpoint",
      "Governance"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Hunting",
      "AI",
      "Endpoint",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-general-availability-of-of-defender-for-cloud-integration-into-the-defender-portal",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-05",
    "effectiveAt": "2026-05-05",
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "General availability of of Defender for Cloud integration into the Defender portal",
    "summary": "May 5, 2026. category: GA. update: General availability of of Defender for Cloud integration into the Defender portal",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Ikrafttredelse: 2026-05-05",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-cloud-security-reporting-in-microsoft-defender-portal-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Cloud security reporting in Microsoft Defender portal (Preview)",
    "summary": "May 20, 2026 Microsoft Defender portal now includes integrated cloud security reporting capabilities, enabling you to create, customize, and share security insights across your organization. With cloud security reporting, you can: View built-in reports such as CNAPP Executive Summary and Cloud Posture that provide predefined views of cloud security data Customize existing reports by duplicating and modifying sections, cards, and layout to match your specific needs Create custom reports from scratch by defining sections and selecting relevant cards Export reports to PDF for sharing with stakeholders and leadership Control report access using visibility settings (Private, Tenant-level access, or Public) Filter and organize reports by type and visibility The CNAPP Executive Summary report provides a consolidated view of cloud-native application protection platform signals, including threat detection, secure score trends, vulnerability management, security recommendations, investigation & response activity, and regulatory compliance status. The Cloud Posture report offers a centralized view of your overall cloud security posture, helping you assess security risk, track progress over time, and prioritize remediation efforts across environments and workloads. To access cloud security reports, navigate to the Reporting page in the Microsoft Defender portal and select the Cloud tab. Learn more about Cloud security reporting in Microsoft Defender portal.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-sql-vulnerability-assessment-express-configuration-now-available-for-azure-sql-managed-instance-and-synapse-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": "2026-05-17",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SQL Vulnerability Assessment Express Configuration now available for Azure SQL Managed Instance and Synapse (Preview)",
    "summary": "May 17, 2026 SQL Vulnerability Assessment (VA) Express Configuration is now available in preview for Azure SQL Managed Instance and Azure Synapse Analytics Workspaces. This Microsoft-managed storage tool for vulnerability baselines and scan results extends the same experience already available for Azure SQL Database at no extra cost. With this release, customers using Azure SQL Managed Instances or Synapse Workspaces can now enable SQL VA without configuring a customer-managed storage account. Express Configuration is the recommended enablement mode and provides the same security value as Classic Configuration (customer-managed storage), with a simplified setup experience. A new unified REST API provides a consistent management surface for SQL VA across Azure SQL Database, Azure SQL Managed Instance, Synapse Workspaces and SQL on machines (Azure VM and Arc enabled SQL). Learn more about SQL vulnerability assessment overview and how to enable vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-05-17",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-05-public-preview-enable-soft-delete-for-microsoft-entra-device-objects",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Enable soft-delete for Microsoft Entra Device objects",
    "summary": "New feature Service category: Device Access Management Product capability: Entra Backup and Recovery Device Soft Delete, now available in preview, enables administrators to safely remove device objects by moving them to a recoverable state instead of permanently deleting them. This feature allows organizations to restore devices within a defined retention period while preserving critical data such as device identity and associated security artifacts. The feature supports Microsoft Entra joined, registered, and hybrid joined devices and helps reduce risk from accidental deletions while improving device lifecycle management.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-public-preview-sensitivity-labels-for-microsoft-entra-security-groups",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Sensitivity labels for Microsoft Entra security groups",
    "summary": "New feature Service category: Group Management Product capability: Platform Microsoft Entra ID now supports applying Microsoft Purview sensitivity labels to Entra cloud security groups in public preview. Administrators can use labels to govern security group settings such as guest access using the same labels and policies that apply to Microsoft 365 groups today. Labels can be managed in Microsoft Purview and applied through the Microsoft Entra Admin Center, Azure portal, and Microsoft Graph.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-public-preview-automate-setting-or-clearing-user-attributes-values-in-lifecycle-workflows",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Automate setting or clearing user attributes values in Lifecycle workflows",
    "summary": "New feature Service category: Lifecycle Workflows Product capability: Identity Governance We're excited to introduce the User Attribute Updates task in Lifecycle Workflows, extending existing attribute change trigger capabilities with a built-in, customer-ready way to automate attribute updates (set or clear values) directly within a workflow. With a secure, consistent, and auditable experience, organizations can reduce manual effort, improve governance, and scale identity automation with greater confidence.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Automatisering",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-05-public-preview-azure-role-assignments-can-now-be-governed-via-entitlement-management",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Azure Role assignments can now be governed via Entitlement Management",
    "summary": "New feature Service category: Entitlement Management Product capability: Identity Governance You can now govern eligible and active assignments to Azure roles at the Management Group, Subscription, and Resource Group levels directly through access packages. This brings role assignment into the same request, approval, and lifecycle governance model as apps, groups, and more - making it easier to manage access to Azure resources at scale while aligning to least privilege and just-in-time access.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-new-microsoft-secure-score-recommendation",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendation",
    "summary": "Feature. feature: New Microsoft Secure Score recommendation. preview/ga: Preview. description: Microsoft Secure Score now includes the Ensure devices are updated to Secure Boot 2023 certificates and boot manager, which helps identify devices that haven't yet transitioned to the new Secure Boot 2023 certificates required ahead of the June 2026 expiration.Devices that remain on older Secure Boot certificates may become unable to receive new security protections for the early boot process as the certificates approach expiration in June 2026.This recommendation provides centralized visibility into deployment status across the environment, which enables organizations to identify exposure, prioritize remediation, and track rollout progress at scale. To learn more about the recommendation, see Assess Secure Boot status with Microsoft Defender (blog).",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-04-identity-explorer-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Identity Explorer (Preview)",
    "summary": "The Identity page now includes the Identity Explorer tab for customers with a Microsoft Sentinel Data Lake license. This tab uses the hunting graph to visualize identity attack paths and exposure scenarios as interactive graphs. Use predefined identity scenarios to discover lateral movement paths, privilege escalation routes, and credential-access risks.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-04-custom-account-correlation-rules-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Custom account correlation rules (Preview)",
    "summary": "Custom account correlation rules let you link accounts that belong to the same identity, such as privileged accounts with unique naming conventions. You can correlate accounts that don't share strong identifiers such as account ID, SID, object ID, or UPN by defining rules based on UPN prefix, UPN suffix, or domain UPN.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-entra-04-public-preview-account-discovery",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Account Discovery",
    "summary": "Public Preview Service category: Provisioning Product capability: 3rd Party Integration Microsoft Entra ID Governance now supports account discovery for connected applications in public preview. This capability provides administrators with visibility into all accounts that exist within connected applications, including orphan accounts. By generating discovery reports directly from the provisioning experience, organizations can identify accounts in connected applications that aren't assigned to the enterprise application in Microsoft Entra and simplify onboarding the application. This capability requires a Microsoft Entra ID Governance or Microsoft Entra Suite license. Learn more: https://aka.ms/accountDiscoveryDocumentation",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-public-preview-microsoft-entra-id-federation-with-external-id-eeid",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Microsoft Entra ID federation with External ID (EEID)",
    "summary": "Public Preview Service category: B2C - Consumer Identity Management Product capability: 3rd Party Integration Microsoft Entra ID federation with External ID (EEID) enables organizations to let users sign in to customer‑facing applications using their existing workforce Entra ID identities. By leveraging standards‑based federation, users authenticate with their home tenant while applications hosted in an External ID tenant rely on trusted identity assertions from Entra ID. This approach reduces the need for duplicate accounts, streamlines sign‑in experiences, and allows organizations to extend consistent security controls across workforce and customer scenarios.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-public-preview-app-based-branding-via-branding-themes-in-microsoft-entra-tenants",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - App-based branding via Branding themes in Microsoft Entra tenants",
    "summary": "Public Preview Service category: User Experience and Management Product capability: User Authentication In Microsoft Entra tenants, customers can create a single, tenant-wide, customized branding experience that applies to all apps. We are introducing a concept of Branding \"themes\" to allow customers to create different branding experiences for specific applications.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-public-preview-count-filtering-in-sign-ins-api",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - $count filtering in sign-ins API",
    "summary": "Public Preview Service category: MS Graph Product capability: Monitoring & Reporting The ability to use $count in sign-ins API requests is now here, allowing customers to perform count computations directly in API requests.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-gsa-ios-client-support",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - GSA iOS client support",
    "summary": "General Availability Service category: iOS client Product capability: Network Access We are excited to announce the general availability of the iOS Global Secure Access (GSA) client. The Global Secure Access client on iOS and iPadOS requires no new agent installation. It leverages the existing Microsoft Defender for Endpoint (MDE) to route traffic through Microsoft SSE for Microsoft 365, internet access, and private access.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "GA",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-network-content-filtering-based-on-file-types",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Network Content Filtering based on File Types",
    "summary": "General Availability Service category: Internet Access Product capability: Network Access Global Secure Access supports network-based content filtering based on file types. This allows you to monitor and control file transfers across the network to GenAI and SaaS apps to prevent unauthorized exfiltration of content.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-04-general-availability-gsa-cloud-firewall-for-remote-networks",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - GSA Cloud Firewall for Remote Networks",
    "summary": "General Availability Service category: Internet Access Product capability: Network Access Customer can use GSA cloud firewall to apply admin configurable, 5-tuple (source IP, destination IP, protocol, source port, destination port) based filtering for all internet traffic acquired from branch offices through GSA remote networks capability.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-purview-04-sensitivity-labels",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitivity labels",
    "summary": "General availability (GA): Auto-labeling policies introduce a new flow where you must decide whether to automatically apply a sensitivity label, or remove a label when the configured conditions apply for files in SharePoint and OneDrive. When you chose to automatically apply a sensitivity label, you can now optionally choose to always overriding an existing label that has a lower priority label, even if it was manually applied. This option was previously available for emails only and now extends to files in SharePoint and OneDrive. New: Rolling out, users can now apply sensitivity labels configured for user-defined permissions while using Office for the web. A prerequisite for this functionality is that co-authoring is enabled for the tenant. If this prerequisite isn't in place, users still see the message that they must use a desktop app to apply the label. New: The Label policies page for label publishing policies has a new Export policies option, where the Export to CSV selection acts similarly to Export on the Sensitivity labels page. The Export to Zip selection includes more detailed information about the policies and all sensitivity labels in your tenant.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-identity-security-enhancements",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Identity security enhancements",
    "summary": "New identity security capabilities help you monitor and manage identity security for human and non-human identities: Identity Security dashboard (Preview): The Identity Security dashboard provides summary cards for identity providers, on-premises identities, SaaS identities, PAM and IGA integrations, and non-human identities. Widgets show deployment status, highly privileged identities, users at risk, and domains with unsecured configurations.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-support-for-additional-azure-regions-for-defender-for-apis-and-api-security-posture-management-with-defender-cspm",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": "2026-03-31",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Support for additional Azure regions for Defender for APIs and API security posture management with Defender CSPM",
    "summary": "March 31, 2026 Microsoft Defender for APIs and API security posture management with Defender CSPM has expanded to provide its capabilities in the following Azure regions: Sweden Central Sweden South Germany West Central Germany North Italy North France Central France South Norway East Norway West Switzerland North Switzerland West Korea Central Korea South South Africa North South Africa West Customers who have Azure API Management services in these regions can now use the capabilities offered by Microsoft Defender for APIs and API security posture management with Defender CSPM. API discovery and security posture capabilities in Defender CSPM for Azure Function Apps and Azure Logic Apps have also been expanded to these regions. This feature is still in preview. Learn more about Microsoft Defender for APIs and API security posture management with Defender CSPM.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Frist: 2026-03-31",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-expanded-multicloud-coverage-for-aws-and-gcp-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expanded multicloud coverage for AWS and GCP (Preview)",
    "summary": "March 29, 2026 Microsoft Defender for Cloud expands multicloud posture management with broader native coverage for AWS and GCP. This update adds discovery and posture assessment for additional resource types across compute, databases, storage, analytics, networking, identity, secrets, DevOps, and AI/ML services. Asset inventory: Newly supported AWS and GCP resources are now discovered and visible in the Asset inventory experience. Security recommendations: Approximately 150 new recommendations help identify misconfigurations and posture gaps across the newly supported resources. Important Compliance results may change as new recommendations are evaluated. This reflects expanded coverage, not a regression in security posture. Secure score isn't affected by recommendations in preview. In the Azure portal, only assets that have security issues detected on them are reflected. In the Defender portal, all discovered resources in customers' environments are reflected, even if there are no security issues detected on them. Learn more about security recommendations.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-on-demand-malware-scanning-of-azure-files-in-microsoft-defender-for-storage-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "On-demand malware scanning of Azure Files in Microsoft Defender for Storage (Preview)",
    "summary": "March 10, 2026 On-demand malware scanning for Azure Files in Microsoft Defender for Storage is now in preview. This preview extends the existing on-demand malware scan feature and lets you scan entire Azure Storage accounts that contain blobs and files. You can start scans in the Azure portal UI or with the Representational State Transfer (REST) application programming interface (API). You can also automate scans with Azure Logic Apps, Azure Automation playbooks, and PowerShell scripts. This feature uses Microsoft Defender Antivirus and applies the latest malware definitions for each scan. It also shows an upfront cost estimate in the Azure portal before you start a scan.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-microsoft-entra-backup-and-recovery-is-now-available",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Microsoft Entra Backup and Recovery is now available",
    "summary": "Public Preview Service category: Entra Backup and Recovery Product capability: Entra Backup and Recovery Microsoft Entra Backup and Recovery is a built-in solution to help restore your tenant after accidental changes or malicious updates. Always on by default, it automatically backs up critical directory objects — including users, groups, applications, service principals, managed identities, conditional Access policies, named locations, agent IDs, and authentication and authorization policy, so admins can quickly restore them to a previously known good state. At preview, Entra Backup and Recovery automatically takes daily backup of a tenant’s supported directory objects. If a tenant has Microsoft Entra ID P1 or P2 licenses, one backup is taken each day and retained for five days. Admins can view available snapshots, generate difference reports to understand what has changed, and run recovery jobs to restore objects to a prior state. This gives your organization a reliable, built in safety net helping you recover with confidence, minimize downtime, and protect your tenant from accidental changes, misconfigurations, or security compromises.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-entra-hybrid-join-using-entra-kerberos",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Entra Hybrid Join using Entra Kerberos",
    "summary": "Public Preview Service category: Device Registration and Management Product capability: Device Lifecycle Management This new capability enables a Windows device to become Hybrid Entra joined immediately at provisioning time, without waiting for Entra Connect sync or requiring AD FS. By leveraging Entra Kerberos, customers can modernize their hybrid identity architecture while reducing infrastructure complexity and dependency on legacy federation components.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-cross-tenant-security-group-synchronization",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Cross-tenant security group synchronization",
    "summary": "Public Preview Service category: Provisioning Product capability: Collaboration We’re introducing cross-tenant group synchronization, a new capability that allows organizations to synchronize security groups across Microsoft Entra tenants. This feature enables centralized management of group membership in a source tenant while making those groups available in one or more target tenants, simplifying cross-tenant collaboration and reducing administrative overhead associated with managing duplicate groups. With cross-tenant group synchronization, organizations can extend their existing cross-tenant synchronization configurations to include groups, supporting scenarios such as shared application access, resource authorization, and consistent group-based access control across tenants. Admins can opt in to this functionality and configure attribute mappings and cross-tenant access policies to enable group synchronization into target tenants. Use of cross-tenant group synchronization requires Microsoft Entra ID Governance licenses. Existing licensing requirements for cross-tenant user synchronization features remains unchanged.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-microsoft-entra-passkeys-on-windows",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Microsoft Entra passkeys on Windows",
    "summary": "Public Preview Service category: Authentications (Logins) Product capability: User Authentication Microsoft Entra passkeys on Windows are now available in public preview. This feature allows users to register device‑bound passkeys directly in the local Windows Hello container and use them to sign in to Microsoft Entra ID with Windows Hello biometrics or PIN. Entra passkeys on Windows behave as standard FIDO2 credentials and can be used for Entra authentication flows without requiring the device to be Microsoft Entra joined or registered. During public preview, the feature is opt‑in and requires explicit configuration through passkey profiles to allow Windows Hello as a passkey provider.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Container",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Container",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-tenant-configuration-management-administration-portal-experience",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public preview - Tenant configuration management administration portal experience",
    "summary": "Public Preview Service category: Tenant Governance Product capability: Tenant Governance Now you can use the Entra admin center to administer tenant configuration management capabilities of Entra tenant governance. You can use this experience to: Create and update monitors that enable you to define the desired state of resources in your tenant across a range of Microsoft services, and monitor the actual state of those resources relative to the desired state on an ongoing basis See reports of monitor results, and details of any configuration drifts identified by the configuration management service when it runs a monitor that you defined. Manage permission for the configuration management service to monitor resources in your tenant, by assigning app permissions or Entra roles.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-passkey-adoption-campaigns-with-the-conditional-access-optimization-agent",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Passkey Adoption Campaigns with the Conditional Access Optimization Agent",
    "summary": "Public Preview Service category: Conditional Access Product capability: Identity Security & Protection The Conditional Access Optimization Agent now supports passkey adoption campaigns in public preview, helping organizations roll out phishing‑resistant authentication in a structured and automated way. With this capability, the agent can assess user and device readiness, generate a recommended deployment plan, guide users through required steps, and automatically enforce Conditional Access policies once users are ready. Campaigns progress continuously as prerequisites are met, reducing manual effort for large‑scale passkey rollouts. Passkey adoption campaigns are managed directly from the Microsoft Entra admin center and are currently targeted at privileged administrator roles. The agent creates Conditional Access policies in report‑only mode first, allowing administrators to monitor impact before enforcement.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-phased-rollout-with-the-conditional-access-agent",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Phased Rollout with the Conditional Access Agent",
    "summary": "Public Preview Service category: Conditional Access Product capability: Identity Security & Protection You can now use the Conditional Access Optimization Agent to safely roll out any report‑only Conditional Access policy in phases. When you initiate the process, the agent analyzes sign‑in data to recommend a low‑risk, staged deployment plan, starting with smaller user groups and gradually expanding, so you can turn policies on with confidence and minimize user impact.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-general-availability-new-m365-group-creation-experience-in-my-groups",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - New M365 group creation experience in My Groups",
    "summary": "General Availability Service category: Group Management Product capability: End User Experiences We’re improving the Microsoft 365 group creation experience in My Groups to give group owners more control and clarity from the start. The updated experience lets you configure key group, email, and security settings during creation—so your group works the way you expect without extra admin help later. With this update, you can: Set group usage guidelines, email alias, and sensitivity labels Configure Exchange settings such as sending welcome emails, subscribing members to conversations, and showing the group mailbox and calendar in Outlook Control who can send email to the group, hide the group from the global address list, and allow or block external senders Enable security group functionality when needed This streamlined, self‑service experience helps ensure your group is created with the right defaults and policies from day one. We are rolling out to all tenants by end of March.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-library-management-for-live-response",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Library management for live response",
    "summary": "Feature. feature: Library management for live response. preview/ga: Preview. description: You can now view and manage files and scripts used during live response sessions in the Microsoft Defender portal. With this enhancement, you get a centralized view of all uploaded files and their properties, and can upload, view and delete files outside the live response session.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-enhanced-defender-deployment-tool-for-windows",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced Defender deployment tool for Windows",
    "summary": "Feature. feature: Enhanced Defender deployment tool for Windows. preview/ga: Preview. description: The new version of the tool streamlines onboarding and enhances security by:- Bundling the onboarding package directly into the tool's executable.- Generating a key during deployment package creation that is required for running the tool.- Enabling users to configure an expiry date for the package to reduce the risk of unauthorized use.In addition, a new Deployment packages page in the Defender portal facilitates management of downloaded packages by providing centralized visibility into all the packages and their current status.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-database-level-recommendations-experience-for-sql-vulnerability-assessment-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Database-level recommendations experience for SQL Vulnerability Assessment (Preview)",
    "summary": "February 10, 2026 Microsoft Defender for SQL is introducing a database-level recommendations experience for SQL Vulnerability Assessment in preview. This update applies to SQL VA across all supported database types (PaaS and IaaS), including both Express and Classic configurations, and is available in the following portal experiences: Azure portal Defender portal In this experience, each SQL Vulnerability Assessment rule generates a separate assessment for each affected database. Assessments are displayed and managed as recommendations in the Defender for Cloud Recommendations page. In the previous model, findings were aggregated at the server or instance level and surfaced under these recommendations: SQL databases should have vulnerability findings resolved SQL servers on machines should have vulnerability findings resolved The database-level experience keeps the same security capabilities and doesn’t affect SQL VA scanning logic, rules, queries, scan schedules, APIs, or pricing. It only provides another way to consume and manage findings that's consistent with all Defender for Cloud recommendations. During preview, the new database-level assessments don’t affect Secure Score in the Azure portal but do contribute to Secure Score in the Defender portal. The SQL vulnerability assessment rules reference has been updated to include the new database-level recommendation names and assessment identifiers. The existing server-level (aggregated) experience remains available during preview.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-sentinel-02-generate-playbooks-using-ai-in-microsoft-sentinel-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Generate playbooks using AI in Microsoft Sentinel (Preview)",
    "summary": "You can now generate playbooks using AI in Microsoft Sentinel. The SOAR playbook generator creates python based automation workflows coauthored through a conversational experience with Cline, an AI coding agent.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Automatisering",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-02-public-preview-byod-support-for-windows-client-using-microsoft-entra-registration",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - BYOD support for Windows client using Microsoft Entra registration",
    "summary": "New feature Service category: BYOD support Product capability: Network Access Bring Your Own Device (BYOD) support for Windows using Microsoft Entra‑registered devices is now available in public preview. Users and partners can access corporate resources from their own devices. Admins can assign the Private Application traffic profile to internal accounts, including internal guest users.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-02-public-preview-new-end-user-homepage-in-my-account",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - New end user homepage in My Account",
    "summary": "New feature Service category: My Profile/Account Product capability: End User Experiences The homepage at https://myaccount.microsoft.com has been updated to provide a more task-focused experience. Users will see pending actions like renewing expiring groups, approving access package requests, and setting up MFA directly on the homepage. Quick links to apps, groups, access packages, and sign-in details will be easier to find and use. This change is designed to streamline account management and help users stay on top of access and security tasks.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-security-posture-assessments",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New security posture assessments",
    "summary": "Remove stale Active Directory accounts (Preview) lists any user accounts in Active Directory that are stale, meaning they haven't logged in at all during the past 90 days. Microsoft Entra ID privileged user accounts that are also privileged in Active Directory (Preview) lists Microsoft Entra ID privileged user accounts that also have privileged roles in Active Directory.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-sentinel-01-ueba-behaviors-layer-aggregates-actionable-insights-from-raw-logs-in-near-real-time-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "UEBA behaviors layer aggregates actionable insights from raw logs in near-real time (Preview)",
    "summary": "Microsoft Sentinel introduces a UEBA behaviors layer that transforms high-volume, low-level security logs into clear, human-readable behavioral insights in the Defender portal. This AI-powered capability aggregates and sequences raw events from supported data sources into normalized behaviors that explain \"who did what to whom\" with MITRE ATT&CK context. How behaviors bridge the gap between alerts and raw logs While incoming raw logs are noisy, uncorrelated, and difficult to interpret, and alerts call analysts to take action on potential issues, UEBA behaviors summarize behavior patterns - normal or abnormal - ingested from supported data sources. This creates an abstraction layer that optimizes data for investigations, hunting, and detection. For example, instead of analyzing individual AWS CloudTrail events or firewall logs, analysts see a behavior - like \"Inbound remote management session from external address\" - that summarizes multiple raw events and maps them to known tactics, techniques, and procedures (TTPs). UEBA behaviors: Accelerate investigations: Enable faster incident response by aggregating and sequencing behaviors, allowing analysts to focus on meaningful actions rather than sifting through thousands of events. Transform noisy telemetry into actionable insights: Convert fragmented, high-volume logs into clear, human-readable behavioral observations, making it easier to understand security events. Empower all SOC personas: Enhance workflows for SOC analysts, threat hunters, and detection engineers by providing unified, contextual views and building blocks for detection rules and automation. Ensure explainability: Map to MITRE ATT&CK tactics, entity roles, and raw logs for traceability and clarity. UEBA behaviors can be enabled independently from UEBA anomaly detection. Supported data sources during public preview: AWS CloudTrail, CommonSecurityLog (CyberArk Vault, Palo Alto Threats), and GCPAuditLogs.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting",
      "Automatisering",
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Hunting",
      "Automatisering",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-entra-01-general-availability-service-principal-creation-audit-logs-for-alerting-monitoring",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "General Availability - Service Principal creation audit logs for alerting & monitoring",
    "summary": "New feature Service category: Audit Product capability: Monitoring & Reporting New audit log properties now make it easy for admins to understand why a service principal was created and who or what triggered it. The logs now surface the provisioning mechanism, the specific SKUs or service plans that enabled just‑in‑time creation, and the home tenant of the app registration. This helps admins quickly distinguish Microsoft‑driven provisioning from tenant‑driven activity, streamlining alerting and investigations into newly created service principals.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-12-new-properties-for-sensorcandidate-resource-type-in-graph-api-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New properties for 'sensorCandidate' resource type in Graph-API (preview)",
    "summary": "Property Type Description domainName String The domain name of the sensor. senseClientVersion String The version of the Defender for Identity sensor client. This capability is currently in preview and available in API preview version. Learn more here",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-11-new-security-posture-assessment-change-password-for-on-premises-account-with-potentially-leaked-credentials-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New security posture assessment: Change password for on-premises account with potentially leaked credentials (Preview)",
    "summary": "The new security posture assessment lists users whose valid credentials were leaked.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-11-expansion-of-identity-scoping-support-for-organizational-units-preview",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expansion of identity scoping: Support for Organizational units (Preview)",
    "summary": "In addition to the GA release of scoping by Active Directory domains a few months ago, you can now scope by **Organizational Units (OUs)*- as part of XDR user role-based access control (URBAC). This enhancement provides even more granular control over which entities and resources are included in security analysis.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-sentinel-10-export-stix-threat-intelligence-objects-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Export STIX threat intelligence objects (Preview)",
    "summary": "Microsoft Sentinel now supports exporting STIX threat intelligence objects to other destinations, such as external platforms. If you've ingested threat intelligence to Microsoft Sentinel from an external platform, such as when using the Threat Intelligence - TAXII data connector, you can now export threat intelligence back to that platform, enabling bi-directional intelligence sharing. This new support provides direct and secure sharing, reducing the need for manual processes or custom playbooks to distribute threat intelligence. Exporting TI objects is currently supported for TAXII 2.1-based platforms only. You can access the export feature from both the Defender portal and the Azure portal: Defender portal Azure portal",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-09-new-data-sources-for-enhanced-user-and-entity-behavior-analytics-ueba-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New data sources for enhanced User and Entity Behavior Analytics (UEBA) (Preview)",
    "summary": "Microsoft Sentinel's UEBA empowers SOC teams with AI-powered anomaly detection based on behavioral signals in your tenant. It helps prioritize threats using dynamic baselines, peer comparisons, and enriched entity profiles. UEBA now supports anomaly detection using six new data sources: Microsoft authentication sources: These sources provide deeper visibility into identity behavior across your Microsoft environment. Microsoft Defender XDR device logon events: Capture sign in activity from endpoints, helping identify lateral movement, unusual access patterns, or compromised devices. Microsoft Entra ID managed identity signin logs: Track sign-ins by managed identities used in automation, such as scripts and services. This is crucial for spotting silent misuse of service identities. Microsoft Entra ID service principal signin logs: Monitor sign-ins by service principals - often used by apps or scripts - to detect anomalies, such as unexpected access or privilege escalation. Third-party cloud and identity management platforms: UEBA now integrates with leading cloud and identity management platforms to enhance detection of identity compromise, privilege misuse, and risky access behaviors across multicloud environments. AWS CloudTrail login events: Flag risky login attempts in Amazon Web Services (AWS), such as failed multifactor authentication (MFA) or use of the root account—critical indicators of potential account compromise. GCP audit logs - Failed IAM access events: Capture denied access attempts in Google Cloud Platform, helping identify privilege escalation attempts or misconfigured roles. Okta MFA and authentication security change events: Surface MFA challenges and changes to authentication policies in Okta—signals that might indicate targeted attacks or identity tampering. These new sources enhance UEBA's ability to detect threats across Microsoft and hybrid environments based on enriched user, device, and service identity data, enhanced behavioral context, and new cross-platform anomaly detection capabilities. To enable the new data sources, you must be onboarded to the Defender portal.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Hunting",
      "Automatisering",
      "AI",
      "Endpoint",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Hunting",
      "Automatisering",
      "AI",
      "Endpoint",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-05-unified-role-based-access-control-in-multitenant-management-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Unified role-based access control in multitenant management (Preview)",
    "summary": "Unified role-based access control (URBAC) is now available in the Microsoft Defender multitenant management portal. You can create, delete, import, and edit roles in the multitenant management portal. This capability provides a comprehensive view of permissions and access for your tenants, and a centralized administration to manage these permissions.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-04-microsoft-sentinel-now-ingests-all-stix-objects-and-indicators-into-new-threat-intelligence-tables-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": "2025-07-31",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel now ingests all STIX objects and indicators into new threat intelligence tables (Preview)",
    "summary": "Microsoft Sentinel now ingests STIX objects and indicators into the new threat intelligence tables, ThreatIntelIndicators and ThreatIntelObjects. The new tables support the new STIX 2.1 schema, which lets you ingest and query various threat intelligence objects, including identity, attack-pattern, threat-actor, and relationship. Microsoft Sentinel will ingest all threat intelligence into the new ThreatIntelIndicators and ThreatIntelObjects tables, while continuing to ingest the same data into the legacy ThreatIntelligenceIndicator table until July 31, 2025. Be sure to update your custom queries, analytics and detection rules, workbooks, and automation to use the new tables by July 31, 2025. After this date, Microsoft Sentinel will stop ingesting data to the legacy ThreatIntelligenceIndicator table. We're updating all out-of-the-box threat intelligence solutions in Content hub to leverage the new tables.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Hunting",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "Preview",
      "Identitet",
      "Hunting",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Frist: 2025-07-31",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "security-exposure-management-11-announcing-the-general-availability-of-microsoft-security-exposure-management",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Announcing the General Availability of Microsoft Security Exposure Management",
    "summary": "We are excited to announce the general availability of Microsoft Security Exposure Management. This powerful tool helps organizations focus on their most critical exposures and act swiftly. By integrating security insights across the entire digital estate, it provides a comprehensive view of risk posture, enabling faster, more informed decisions to reduce exposure before attackers can exploit it. With this GA release, you can now build and enhance a Continuous Threat Exposure Management (CTEM) program, continuously identifying, prioritizing, and mitigating risks across your digital landscape.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "GA",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 53,
    "tags": [
      "GA",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-07-build-101-26062-0009",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26062.0009",
    "summary": "Release - macOS. feature: Build 101.26062.0009. preview/ga: GA. description: Release version 20.126062.9.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-07-build-1-1-78290102",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.1.78290102",
    "summary": "Release - iOS. feature: Build 1.1.78290102. preview/ga: GA. description: Release version 1.1.78290102 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-07-ai-agent-runtime-protection-updates",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "AI agent runtime protection updates",
    "summary": "Feature. feature: AI agent runtime protection updates. preview/ga: Preview. description: AI agent runtime protection includes these enhancements:- Vendor-supported agent event interfaces now work with standard platform and engine update channels, so no Beta channel configuration is required. Agent-native event inspection now supports Codex CLI and the GitHub Copilot app.- Network inspection is now supported for agents that don't expose vendor-supported event interfaces, including OpenClaw and similar Node.js-based Claw agents.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-07-build-101-26052-0016",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26052.0016",
    "summary": "Release - macOS. feature: Build 101.26052.0016. preview/ga: GA. description: Release version 20.126052.16.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "security-exposure-management-07-codename-mdash-mai-augmented-scan-profile-now-available-for-on-demand-scans-private-preview",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Codename MDASH - MAI-Augmented scan profile now available for on-demand scans private preview",
    "summary": "Expanding on the previously released Defender CLI support, the MAI-Augmented scan profile is now also available in preview for on-demand scans triggered from the Microsoft Defender portal. Security teams can select this profile when starting an on-demand scan from the Manage scans.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-07-codename-mdash-mai-augmented-scan-profile-private-preview",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Codename MDASH - MAI-Augmented scan profile private preview",
    "summary": "The MAI-Augmented scan profile is now available in preview as part of Codename MDASH. The MAI-Augmented profile can be used when triggering a scan through the Defender CLI. It includes MAI-Cyber-1-Flash, a new cyber-specialized model that extends the current agentic scanner in addition to the existing required models. Security teams can choose this profile when triggering a scan from Defender CLI or continue using a scan profile based on the existing models.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-07-codename-mdash-agentic-code-scanner-private-preview",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Codename MDASH - Agentic code scanner private preview",
    "summary": "Codename MDASH - Agentic code scanner is now available in private preview in Microsoft Security Exposure Management. Codename MDASH uses a multi-model agentic AI system to detect code vulnerabilities with greater depth and accuracy than traditional static analysis. Security teams can run scans from Defender CLI or through a GitHub connector, review findings in the Defender portal, and use results to help prioritize code security risks.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "AI",
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-build-1-0-9029-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.9029.0101",
    "summary": "Release - Android. feature: Build 1.0.9029.0101. preview/ga: GA. description: Release version 1.0.9029.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-build-101-26042-0020",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26042.0020",
    "summary": "Release - macOS. feature: Build 101.26042.0020. preview/ga: GA. description: Release version 20.126042.20.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-local-ai-agent-discovery-macos-support-and-new-agents",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Local AI agent discovery — macOS support and new agents",
    "summary": "Feature. feature: Local AI agent discovery — macOS support and new agents. preview/ga: Preview. description: Local AI agent discovery now supports macOS endpoints in addition to Windows. This update also adds discovery support for new agents including Junie CLI, Kiro CLI, Warp, Hermes Agent, Goose Desktop, Perplexity Desktop, Kiro IDE, Devin Desktop (formerly Windsurf), and QClaw.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-selective-response-actions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Selective Response Actions",
    "summary": "Feature. feature: Selective Response Actions. preview/ga: GA. description: Selective Response Actions enables organizations to tailor high-impact security operations on devices during onboarding. It provides precise control over how response actions are applied on Tier-0 systems and other high-value assets, helping maintain operational stability while delivering strong protection.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-windows-defender-antivirus-platform-4-18-26050-15-engine-1-1-26050-11",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.26050.15 / Engine 1.1.26050.11",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.26050.15 / Engine 1.1.26050.11. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-local-ai-agent-discovery",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Local AI agent discovery",
    "summary": "Feature. feature: Local AI agent discovery. preview/ga: Preview. description: Microsoft Defender for Endpoint now automatically discovers supported local AI agents running on onboarded Windows devices — including coding agents and IDE extensions, desktop AI assistants, local AI runtimes, and agent platforms. Discovered agents appear as assets in the AI agent inventory, exposure map, and advanced hunting, giving security teams visibility into local AI agent usage across the organization.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Hunting",
      "AI",
      "Endpoint",
      "Teams"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting",
      "AI",
      "Endpoint",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-local-ai-agent-runtime-protection",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Local AI agent runtime protection",
    "summary": "Feature. feature: Local AI agent runtime protection. preview/ga: Preview. description: Runtime protection for supported local AI agents on Windows endpoints is now available in public preview. Microsoft Defender inspects the agent loop (user prompts, tool calls, and tool responses) and can block risky activity before it executes, helping stop prompt injection and unsafe agent actions at the device level. Blocked and audited events appear as alerts in Microsoft Defender to support incident correlation and investigation workflows.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-06-build-101-26042-0009",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26042.0009",
    "summary": "Release - Linux. feature: Build 101.26042.0009. preview/ga: GA. description: Release version 30.126042.0009.0 - see considerations and updates for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-discovery-and-posture-for-serverless-container-workloads-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Discovery and posture for serverless container workloads (Preview)",
    "summary": "June 4, 2026 Microsoft Defender for Cloud now includes discovery and posture coverage for supported serverless container workloads in preview. This capability adds inventory visibility, security recommendations for misconfigurations and vulnerability assessment findings, and attack path analysis for Azure Container Apps and Azure Container Instances. Learn more about Discovery and posture for serverless container workloads (Preview).",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-kubernetes-misconfiguration-enforcement-in-defender-for-containers-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": "2026-06-03",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Kubernetes misconfiguration enforcement in Defender for Containers (Preview)",
    "summary": "June 3, 2026 Kubernetes misconfiguration enforcement is now available in public preview in Microsoft Defender for Containers. This feature extends Kubernetes security from audit to audit or block mode at deployment time, preventing risky Kubernetes deployments before they reach production. Kubernetes misconfiguration enforcement evaluates Kubernetes resource configurations at admission time and enforces Microsoft Defender security best practice rules, complementing existing post-deployment monitoring with proactive enforcement. After you enable the feature, a default security rule is automatically created in Audit mode. You can configure rules to use Block mode to actively prevent non-compliant deployments. This feature is available only in commercial clouds. It isn't available in national or sovereign clouds, including US Government, China Government, and other sovereign regions.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-06-03",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-vulnerability-assessment-extended-to-runtime-discovered-container-images-on-eks-and-gke-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Vulnerability assessment extended to runtime-discovered container images on EKS and GKE (Preview)",
    "summary": "June 4, 2026 Defender for Cloud now extends vulnerability assessment to runtime-discovered container images on Amazon Elastic Kubernetes Service (EKS) and Google Kubernetes Engine (GKE). Previously, vulnerability assessment covered registry-based images. With this update, images discovered at runtime that weren't previously scanned from a registry are now also assessed, providing additional findings and increased visibility into running workloads. This capability delivers a unified vulnerability assessment experience across Azure, AWS, and GCP, using the same recommendation model and workflows. To use this feature, you must have AWS or GCP onboarded into Defender for Cloud. As additional image types are being scanned, your bill might increase. Learn more about vulnerability assessment for containers.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-kubernetes-node-vulnerability-assessment-extended-to-eks-and-gke-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Kubernetes node vulnerability assessment extended to EKS and GKE (Preview)",
    "summary": "June 2, 2026 Defender for Cloud now extends Kubernetes node (host) vulnerability assessment to Amazon Elastic Kubernetes Service (EKS) and Google Kubernetes Engine (GKE), bringing parity with the existing Azure Kubernetes Service (AKS) capability. This feature detects OS-level vulnerabilities in Kubernetes node VMs across EKS and GKE environments. When vulnerabilities are detected, Defender for Cloud surfaces an \"Upgrade Kubernetes nodes\" recommendation that identifies affected node pools and guides you to upgrade to a patched Kubernetes or node version. As additional image types are being scanned, your bill might increase. Key details: Covers Kubernetes host nodes (OS/infrastructure layer), not container workloads. Provides consistent visibility and unified remediation guidance across Azure, AWS, and GCP. Requires AWS or GCP onboarded into Defender for Cloud with agentless scanning enabled. Learn more about Kubernetes node vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-new-actionable-recommendation-to-upgrade-aks-for-system-pod-vulnerabilities-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New actionable recommendation to upgrade AKS for system pod vulnerabilities (Preview)",
    "summary": "June 01, 2026 Defender for Cloud now provides a new, actionable recommendation, Upgrade Azure Kubernetes Service Version (preview) that helps you remediate vulnerabilities in AKS-managed system pods. This replaces the previous non-actionable recommendation with a resolvable remediation path, helping teams focus on vulnerabilities they can directly remediate while maintaining clear visibility into cluster exposure. Learn more about reviewing and remediating Kubernetes node vulnerabilities and security recommendations for containers.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-06-overview-dashboard-preview",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Overview dashboard (preview)",
    "summary": "The updated Microsoft Security Exposure Management overview dashboard is now in preview. The dashboard consolidates signals from cloud resources and devices into a single, action-oriented view of exposure risk, organized around two core actions: Resolve Now and Monitor Exposure.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-sentinel-06-link-behavior-results-to-incidents-in-advanced-hunting-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Link behavior results to incidents in advanced hunting (Preview)",
    "summary": "You can now link behavior-based query results from the BehaviorInfo table to new or existing incidents in advanced hunting. This feature lets you enrich incident context with behavior records from Microsoft Sentinel UEBA. The wizard automatically populates alert metadata and entities from the selected behavior record.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-06-reason-over-microsoft-sentinel-graphs-with-graph-tool-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Reason over Microsoft Sentinel graphs with graph tool (Preview)",
    "summary": "The graph tool collection in the Microsoft Sentinel Model Context Protocol (MCP) server provides visual graph-based exploration of relationships across identities, devices, threats, and signals to assess coverage, dependencies, and configuration gaps.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-purview-06-data-security-investigations",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Investigations",
    "summary": "In preview: Endpoint DLP evidence collection is now available as a data source in Data Security Investigations. Investigators can query data captured by endpoint Data Loss Prevention (DLP) policies on onboarded devices and add the associated content to an investigation scope for AI-powered analysis. This integration enables aggregate analysis of endpoint exfiltration events instead of per-alert triage.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Hunting",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-06-information-protection-client",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Information Protection client",
    "summary": "In preview: View and label files with the Information Protection client using macOS.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-06-sensitivity-labels",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitivity labels",
    "summary": "Preview: Rolling out, the sensitivity label setting to prevent connected experiences that analyze content now prevents all connected experiences in Word, Excel, and PowerPoint for Windows, rather than a subset of these experiences. Preview: Rolling out, the sensitivity label setting to prevent connected experiences that analyze content extends to Word, Excel, and PowerPoint across MacOS, iOS, and Android.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-private-clusters-protection-for-gated-deployment-binary-drift-detection-and-malware-detection",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-31",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Private clusters protection for gated deployment, binary drift detection, and malware detection",
    "summary": "May 31, 2026. category: Preview. update: Private clusters protection for gated deployment, binary drift detection, and malware detection",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-malware-detection-for-eks-and-gke-nodes",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-31",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Malware detection for EKS and GKE nodes",
    "summary": "May 31, 2026. category: Preview. update: Malware detection for EKS and GKE nodes",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-enhanced-exposure-score-in-defender-vulnerability-management",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced exposure score in Defender Vulnerability Management",
    "summary": "Feature. feature: Enhanced exposure score in Defender Vulnerability Management. preview/ga: Preview. description: The new exposure score model in Defender Vulnerability Management is now available in preview. This model improves risk prioritization and recommendation impact accuracy by incorporating exploit prediction data (EPSS) and asset context factors such as internet-facing status and criticality.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-schedule-antivirus-scans-on-linux",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Schedule antivirus scans on Linux",
    "summary": "Feature. feature: Schedule antivirus scans on Linux. preview/ga: Preview. description: You can now configure scheduled antivirus scans on Microsoft Defender for Endpoint on Linux. Scheduled scans support hourly quick scans, interval-based quick scans, and weekly full scans, with options for low-priority execution, idle-time scheduling, and randomized start times. Configure scans using managed JSON, the Microsoft Defender portal, or the mdatp CLI.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-automatic-device-isolation-automatic-attack-disruption",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Automatic device isolation (automatic attack disruption)",
    "summary": "Feature. feature: Automatic device isolation (automatic attack disruption). preview/ga: Preview. description: Microsoft Defender for Endpoint can now automatically isolate compromised devices as part of automatic attack disruption. Isolation blocks most network traffic while keeping the device connected to security services. The action is time-limited, scoped to the incident, and security operators can release isolation at any time.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-configure-offline-security-intelligence-update-settings-for-linux-from-the-defender-and-intune-portals",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Configure offline security intelligence update settings for Linux from the Defender and Intune portals",
    "summary": "Feature. feature: Configure offline security intelligence update settings for Linux from the Defender and Intune portals. preview/ga: GA. description: You can now configure offline security intelligence update settings for Linux directly from the Defender and Intune portals.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-selective-response-actions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Selective Response Actions",
    "summary": "Feature. feature: Selective Response Actions. preview/ga: Preview. description: Selective Response Actions enables organizations to tailor high-impact security operations on devices during onboarding. It provides precise control over how response actions are applied on Tier-0 systems and other high-value assets, helping maintain operational stability while delivering strong protection.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-05-windows-defender-antivirus-platform-4-18-26040-7-engine-1-1-26040-8",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.26040.7 / Engine 1.1.26040.8",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.26040.7 / Engine 1.1.26040.8. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-scanning-support-for-docker-hardened-container-images-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": "2026-05-19",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Scanning support for Docker Hardened container images (preview)",
    "summary": "May 19, 2026 Microsoft Defender for Cloud's vulnerability scanner, powered by Microsoft Defender Vulnerability Management, is extending its scanning coverage to Docker Hardened container images, and identify vulnerabilities in Docker Images to validate that they're shipping the most secure builds possible. As additional image types are being scanned, your bill might increase. The rollout of this change will occur gradually over several weeks and requires no user action. For all supported distributions, see Registries and images support for vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Frist: 2026-05-19",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-private-clusters-protection-for-gated-deployment-binary-drift-detection-and-malware-detection-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Private clusters protection for gated deployment, binary drift detection, and malware detection (Preview)",
    "summary": "May 31, 2026 Private clusters now support the Defender sensor for gated deployment, binary drift detection, and malware detection in preview. This update extends Defender for Containers coverage to private cluster scenarios where you use the sensor-based features for container protection. For private cluster installation instructions for the preview path, see Deploy Defender for Containers to private clusters (Preview). For feature-level support details, see access patterns and private cluster support for Defender for Containers features.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-malware-detection-for-eks-and-gke-nodes-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Malware detection for EKS and GKE nodes (Preview)",
    "summary": "May 31, 2026 Malware detection is now in preview for Amazon Elastic Kubernetes Service (EKS) nodes and Google Kubernetes Engine (GKE) nodes. This update expands Kubernetes node malware coverage beyond Azure Kubernetes Service (AKS) so you can detect malware in more multicloud environments.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-05-information-protection-scanner",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Information protection scanner",
    "summary": "In preview: Administrators can now enable, disable, and configure cluster-level scanner features from PowerShell. In preview: Custom Reporting populates additional columns and tables in the scanner cluster database so administrators can build their own reports directly against scan results in Power BI or any SQL-based reporting tool, without stitching together per-scan CSV reports.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-05-sensitivity-labels",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitivity labels",
    "summary": "In preview: Rolling out, manual labeling support for MP4 files in SharePoint and OneDrive.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-view-action-status-in-the-activities-tab-preview",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "View action status in the Activities tab (Preview)",
    "summary": "Feature. feature: View action status in the Activities tab (Preview). preview/ga: Preview. description: You can now view the current status of automatic attack disruption and predictive shielding actions related to a specific incident. You view this data in the Activities tab of the incident page. The data applies to the Contain user, GPO hardening, Safeboot hardening response actions.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-101-26032-0000",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26032.0000",
    "summary": "Release - Linux. feature: Build 101.26032.0000. preview/ga: GA. description: Release version 30.126032.0000.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-101-26032-0016",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26032.0016",
    "summary": "Release - macOS. feature: Build 101.26032.0016. preview/ga: GA. description: Release version 20.126032.16.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-4-18-25040-1",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 4.18.25040.1",
    "summary": "Release - macOS. feature: Build 4.18.25040.1. preview/ga: GA. description: Release version 4.18.25040.1 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-windows-defender-antivirus-platform-4-18-26030-3011-engine-1-1-26030-3008",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.26030.3011 / Engine 1.1.26030.3008",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.26030.3011 / Engine 1.1.26030.3008. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-101-26022-0020",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26022.0020",
    "summary": "Release - macOS. feature: Build 101.26022.0020. preview/ga: GA. description: Release version 20.126022.20.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-101-26022-0018",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26022.0018",
    "summary": "Release - macOS. feature: Build 101.26022.0018. preview/ga: GA. description: Release version 20.126022.18.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-04-build-1-0-8805-0103",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8805.0103",
    "summary": "Release - Android. feature: Build 1.0.8805.0103. preview/ga: GA. description: Build 1.0.8805.0103 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-sentinel-04-microsoft-sentinel-data-federation-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel data federation (Preview)",
    "summary": "Powered by Microsoft Fabric, Microsoft Sentinel data federation lets you analyze security data where it already lives, without copying or duplicating it. You can federate data from Microsoft Fabric, Azure Data Lake Storage, and Azure Databricks into Microsoft Sentinel data lake, then use familiar Microsoft Sentinel experiences like KQL, notebooks, and custom graphs across both federated and native data.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-transform-data-with-filter-and-split-features-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Transform data with filter and split features (Preview)",
    "summary": "Native filtering and splitting in the Microsoft Defender portal helps you reduce noise before ingestion, control costs, and intelligently route data between analytics and data lake tiers so you can optimize what gets analyzed versus retained.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-accelerate-microsoft-sentinel-connector-development-with-visual-studio-code-connector-builder-agent-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Accelerate Microsoft Sentinel connector development with Visual Studio Code connector builder agent (Preview)",
    "summary": "An AI-powered, low-code agent in Visual Studio Code helps you build Microsoft Sentinel connectors in minutes, bringing in new data sources faster and unlocking security outcomes sooner.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-build-custom-graphs-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build custom graphs (Preview)",
    "summary": "Build tailored security graphs across the Sentinel data lake and third-party data to uncover attack paths, blast radius, and hidden relationships. These graphs also serve as a foundation for advanced investigations and AI agents.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-cost-estimation-tool-for-customers-and-partners-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Cost estimation tool for customers and partners (Preview)",
    "summary": "A guided, meter-level Microsoft Sentinel cost estimator with three-year projections helps organizations model data growth, predict spend, and plan Microsoft Sentinel adoption with confidence.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-configure-row-level-access-using-microsoft-sentinel-scoping-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Configure row-level access using Microsoft Sentinel scoping (Preview)",
    "summary": "Microsoft Sentinel now supports scoping (row-level RBAC) to control access to specific subsets of Sentinel data without requiring workspace separation. Administrators can define logical scopes, tag data at ingestion time, and assign users or groups to scopes using Unified RBAC, enabling multiple teams to work securely within a shared Sentinel environment. Scoping is configured in the Microsoft Defender portal.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-purview-04-collection-policies",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Collection Policies",
    "summary": "Preview: Collection policies support sensitivity labels as a condition for scoping detection to items with specific sensitivity labels applied. This condition is supported with browser and network cloud apps detection.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-04-data-loss-prevention",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Loss Prevention",
    "summary": "d: Restructured the just-in-time (JIT) protection documentation. Updated: The Get started with just-in-time protection article now focuses on deployment and configuration steps. New: A new conceptual article, Learn about just-in-time protection, now covers JIT concepts, terms, supported activities, device compatibility, and includes a detailed JIT workflow diagram. Preview: DLP policies for unmanaged cloud apps support a new URL contains text condition that detects when the URL of the cloud app contains specified text strings. You can use it as a condition to scope DLP rules to specific URLs, or as an exception to exclude specific URLs from policy enforcement. Preview: Email notifications for browser and network DLP rules notify end users via email when their activity is blocked. Notifications use a rolling 10-minute batching window to prevent excessive emails. Preview: Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS. A new reference article covering DLP policy tips, supported conditions, oversharing dialogs, and override capabilities for Outlook on Android, iOS, and macOS.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-04-data-security-investigations",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Investigations",
    "summary": "In preview: Proactive AI insights from Data Security Posture Management (DSPM) automatically create and refresh a single investigation for your tenant every 24 hours. The DSPM exfiltration objective card displays risk counts across five fixed categories, giving security teams continuous visibility into recently exfiltrated sensitive data without manual investigation creation. New: A new Data Security Investigation Contributor role automatically provides Data Security Investigations access to members of several Microsoft Purview role groups. Members of the Compliance Administrator and Organization Management role groups have administrative and contributor access, while members of the Data Security Management and Insider Risk Management role groups have contributor access without needing explicit role assignment.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI",
      "Teams",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Teams",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-04-data-security-posture-management-preview",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Posture Management (preview)",
    "summary": "New: Microsoft Sentinel with partner solutions now also supports Varonis to provide holistic data insights for Salesforce.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-04-insider-risk-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Insider Risk Management",
    "summary": "In preview: Preview content while triaging alerts to quickly identify false positives, confirm the presence of sensitive data, and decide whether the alert warrants escalation.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-code-to-runtime-enrichment-for-recommendations",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-10",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Code to runtime enrichment for recommendations",
    "summary": "March 10, 2026. category: Preview. update: Code to runtime enrichment for recommendations",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-on-demand-malware-scanning-of-azure-files-in-microsoft-defender-for-storage",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-10",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "On-demand malware scanning of Azure Files in Microsoft Defender for Storage",
    "summary": "March 10, 2026. category: Preview. update: On-demand malware scanning of Azure Files in Microsoft Defender for Storage",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-new-microsoft-secure-score-recommendations",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendations",
    "summary": "Feature. feature: New Microsoft Secure Score recommendations. preview/ga: GA. description: Microsoft Secure Score now includes new recommendations to help organizations reduce exposure to common attack techniques involving remote access and authentication relay attacks: - Block file transfer over RDP: Restricts file transfer capabilities in Remote Desktop Protocol (RDP) sessions. This helps prevent attackers from using RDP sessions to transfer malicious files into the environment or exfiltrate sensitive data. - SMB server security hardening against authentication relay attacks: Helps protect servers from credential relay attacks by strengthening Server Message Block (SMB) authentication protections, including enforcing Extended Protection for Authentication (EPA), SMB signing, and SMB encryption to ensure authentication integrity and protect SMB traffic from tampering or interception.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-build-101-26021-0002",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26021.0002",
    "summary": "Release - Linux. feature: Build 101.26021.0002. preview/ga: GA. description: Release version 30.126021.0002.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-windows-defender-antivirus-platform-4-18-26020-6-engine-1-1-26020-3",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.26020.6 / Engine 1.1.26020.3",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.26020.6 / Engine 1.1.26020.3. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-build-101-26012-0017",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26012.0017",
    "summary": "Release - macOS. feature: Build 101.26012.0017. preview/ga: GA. description: Release version 20.126012.17.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-build-101-26012-0015",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26012.0015",
    "summary": "Release - macOS. feature: Build 101.26012.0015. preview/ga: GA. description: Release version 20.126012.15.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-03-build-101-26012-0007",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26012.0007",
    "summary": "Release - Linux. feature: Build 101.26012.0007. preview/ga: GA. description: Release version 30.126012.0007.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-ai-model-security-for-azure-machine-learning-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "AI model security for Azure Machine Learning (Preview)",
    "summary": "March 30, 2026 Microsoft Defender for Cloud now offers AI model security in preview for Azure Machine Learning registries and workspaces. AI model security helps security teams discover and scan custom AI models for risks before deployment, and review findings in Defender for Cloud. By using AI model security, you can: Discover AI models in Azure Machine Learning registries and workspaces Scan supported model artifacts for malware and unsafe operators Review security findings and remediate surfaced issues in Defender for Cloud Perform CLI-based scanning for CI/CD integrations Learn more about AI model security.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "AI",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-code-to-runtime-enrichment-for-recommendations-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Code to runtime enrichment for recommendations (Preview)",
    "summary": "March 10, 2026 Microsoft Defender for Cloud now provides Code to runtime capabilities, enabling end-to-end visibility across the software development lifecycle (SDLC). This feature helps security teams trace runtime security issues back to their source code origins and understand the full blast radius of vulnerabilities. Key capabilities: SDLC Chain Visibility: Track security issues from source code through pipelines, registries, to runtime environments Blast Radius Analysis: Understand how many assets are affected by a single code change Runtime-to-Source Tracing: Navigate backwards from runtime recommendations to identify the original source of security issues Actionable Remediation: Fix issues at the source to prevent recurring regressions rather than addressing only runtime symptoms Learn more about the Map container images from code to runtime prerequisites. Learn more about Code to runtime enrichment for recommendations.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-tenant-governance-relationships",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public preview - Tenant governance relationships",
    "summary": "Public Preview Service category: Tenant Governance Product capability: Tenant Governance This feature allows admins to request and accept tenant governance relationships, which grant admins of the governing tenant access and administrative control over the governed tenant.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-related-tenants",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public Preview - Related Tenants",
    "summary": "Public Preview Service category: Tenant Governance Product capability: Tenant Governance This feature allows admins to discover related tenants connected to their own by B2B activity or shared billing information. Admins can use this information to request and establish tenant governance relationships, or to quarantine potential risks.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-entra-03-public-preview-secure-add-on-tenant-creation",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Public preview - Secure add-on tenant creation",
    "summary": "Public Preview Service category: Tenant Governance Product capability: Tenant Governance Permissioned users can now create add-on tenants that are owned and governed by their home tenant. Governance is established through tenant governing relationships, granting admins access and control via GDAP.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Governance"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-purview-03-data-loss-prevention",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Loss Prevention",
    "summary": "Preview: DLP supports adaptive scopes for scoping SharePoint policies. SharePoint location scoping",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-03-data-security-posture-management-preview",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Posture Management (preview)",
    "summary": "New: Extend coverage of data insights to third-party SaaS and IaaS platforms by using Microsoft Sentinel with partner solutions to provide holistic data insights across Google Cloud Platform, Snowflake, and Databricks. New: You can now use federated credentials as a more secure method of authentication to run Fabric data risk assessments. This change is also available for data risk assessments in Data Security Posture Management for AI (classic).",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-database-level-recommendations-experience-for-sql-vulnerability-assessment-findings-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-10",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Database-level recommendations experience for SQL Vulnerability Assessment findings (Preview)",
    "summary": "February 10, 2026. category: Preview. update: Database-level recommendations experience for SQL Vulnerability Assessment findings (Preview)",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-what-s-new-and-release-notes-documentation-updates",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "What's new and release notes documentation updates",
    "summary": "Feature. feature: What's new and release notes documentation updates. preview/ga: GA. description: The what's new and OS-specific release notes pages are now updated to provide better visibility and access to new features, improvements, and fixes:- The what's new page (this page) is now named New features in Microsoft Defender for Endpoint and includes both features and links to latest release notes.- The Release notes page now consolidates release details for all supported operating systems, including Windows Antivirus. The new page groups updates by platform and date, making it easier to find specific information.- All previous release notes pages redirect to the consolidated release notes page.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-vulnerable-components-page-renamed-to-software-components",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Vulnerable components page renamed to Software components",
    "summary": "Feature. feature: Vulnerable components page renamed to Software components. preview/ga: GA. description: To reflect Defender Vulnerability Management's visibility into all software components identified in your organization, the Vulnerable components page is now named Software components.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-improved-device-vulnerabilities-report-experience",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Improved Device Vulnerabilities report experience",
    "summary": "Feature. feature: Improved Device Vulnerabilities report experience. preview/ga: GA. description: To simplify and streamline the Device vulnerabilities report experience, the Vulnerable devices report now includes the following changes and enhancements:- The Vulnerable devices by Windows 10/11 version over time section is now removed.- The report's filters only include the Device group filter.- The report's history is now limited to the last 30 days.- The report's history is now limited to the last 30 days.Note: These changes are now visible to government cloud customers, but aren't yet visible in air-gapped environments. This visibility will be added in the coming months.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-build-101-26012-0012",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.26012.0012",
    "summary": "Release - macOS. feature: Build 101.26012.0012. preview/ga: GA. description: Release version 20.126012.12.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-sense-version-10-8821",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sense version 10.8821",
    "summary": "Release - Windows. feature: Sense version 10.8821. preview/ga: GA. description: Release details are now available: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-build-101-25122-0008",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25122.0008",
    "summary": "Release - macOS. feature: Build 101.25122.0008. preview/ga: GA. description: Release version 20.125122.8.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-build-101-25122-0004",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25122.0004",
    "summary": "Release - Linux. feature: Build 101.25122.0004. preview/ga: GA. description: Release version 30.125122.0004.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-02-windows-defender-antivirus-platform-4-18-26010-5-engine-1-1-26010-1",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.26010.5 / Engine 1.1.26010.1",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.26010.5 / Engine 1.1.26010.1. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-container-runtime-anti-malware-detection-and-blocking-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Container runtime anti-malware detection and blocking (Preview)",
    "summary": "February 22, 2026 Microsoft Defender for Cloud is announcing container runtime anti-malware detection and prevention in preview. This feature provides real-time detection and prevention of malware in containerized workloads across Azure Kubernetes Service (AKS), Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine (GKE) environments. With this release, you can create anti-malware rules to define conditions for generating alerts and blocking malware, helping you protect your clusters from threats while minimizing false positives. Learn more about anti-malware detection and blocking.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-binary-drift-now-supports-blocking-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Binary drift now supports blocking (Preview)",
    "summary": "February 22, 2026 Binary drift now supports blocking in preview. With this update, you can configure binary drift policies to not only detect but also block unauthorized changes to container images at runtime. This enhancement helps prevent potential security breaches by stopping the execution of binaries within the containers that have been tampered with or contain unexpected modifications, providing an additional layer of protection for your containerized workloads. Learn more about binary drift detection and blocking.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-threat-protection-for-ai-agents-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": "2026-02-02",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Threat protection for AI agents (Preview)",
    "summary": "February 2, 2026 Microsoft Defender for Cloud now includes threat protection for AI agents built with Foundry, available in preview as part of the Defender for AI Services plan. This new capability delivers advanced security from development through runtime, addressing high-impact, actionable threats aligned with OWASP guidance for LLM and agentic AI systems. This release further expands Defender's AI threat protection coverage, helping organizations secure a broader range of AI platforms. Learn more about Threat Protection for AI Agents with Microsoft Defender for Cloud.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2026-02-02",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-02-insider-risk-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Insider Risk Management",
    "summary": "In preview: Microsoft Fabric indicators now include Lakehouse indicators. In preview: A new quick policy template for detecting data theft from non-Microsoft 365 apps by users leaving your organization is now available.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-01-build-101-25102-0005",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25102.0005",
    "summary": "Release - Linux. feature: Build 101.25102.0005. preview/ga: GA. description: Release version 30.125102.0005.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-01-build-101-25122-0007",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25122.0007",
    "summary": "Release - macOS. feature: Build 101.25122.0007. preview/ga: GA. description: Release version 20.125122.7.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-01-build-101-25122-0006",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25122.0006",
    "summary": "Release - macOS. feature: Build 101.25122.0006. preview/ga: GA. description: Release version 20.125122.6.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-01-device-vulnerabilities-report-enhancements",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Device vulnerabilities report enhancements",
    "summary": "Feature. feature: Device vulnerabilities report enhancements. preview/ga: Preview. description: To simplify and streamline the Device vulnerabilities report experience, the Vulnerable devices report now includes several changes and enhancements (learn more).Note: These changes are not yet visible to government cloud customers.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-01-microsoft-security-private-link-preview",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Security Private Link (Preview)",
    "summary": "January 8, 2026 Microsoft Defender for Cloud is announcing Microsoft Security Private Link in Preview. Microsoft Security Private Link enables private connectivity between Defender for Cloud and your workloads. The connection is established by creating private endpoints in your virtual network, allowing Defender for Cloud traffic to remain on the Microsoft backbone network and avoid exposure to the public internet. Private endpoints are currently supported for the Defender for Containers plan. Learn more about Microsoft Security Private Link for Microsoft Defender for Cloud.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Container",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-01-cloud-software-inventory-in-vulnerability-management-preview",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Cloud software inventory in vulnerability management (Preview)",
    "summary": "Cloud software inventory is available in preview in vulnerability management in the Microsoft Defender portal. This feature shows software in your cloud environment, application versions, assets where each software is installed, and related vulnerabilities. The software inventory helps you understand exposure, find vulnerable software, and prioritize vulnerability assessments. Learn more about vulnerability management.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-sentinel-01-new-entity-behavior-analytics-ueba-widget-in-the-defender-portal-home-page-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Entity Behavior Analytics (UEBA) widget in the Defender portal home page (Preview)",
    "summary": "The Defender portal home page now includes a UEBA widget where analysts can immediately have visibility into anomalous user behavior and therefore accelerate threat detection workflows.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-01-enable-ueba-directly-from-data-connector-configuration-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enable UEBA directly from data connector configuration (Preview)",
    "summary": "You can now enable UEBA for supported data sources directly from the data connector configuration page, reducing management time and preventing coverage gaps. When you enable new connectors, you can onboard the data source to UEBA without navigating to a separate configuration page. This integration allows you to see which data sources feed into UEBA and enable that feed directly from the connector configuration.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-build-101-25092-0005",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25092.0005",
    "summary": "Release - Linux. feature: Build 101.25092.0005. preview/ga: GA. description: Release version 30.125092.0005.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-build-101-25092-0002",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25092.0002",
    "summary": "Release - Linux. feature: Build 101.25092.0002. preview/ga: GA. description: Release version 30.125092.0002.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-build-1-0-8412-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8412.0101",
    "summary": "Release - Android. feature: Build 1.0.8412.0101. preview/ga: GA. description: Build 1.0.8412.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-build-1-0-8321-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8321.0101",
    "summary": "Release - Android. feature: Build 1.0.8321.0101. preview/ga: GA. description: Build 1.0.8321.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-build-101-25102-0019",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25102.0019",
    "summary": "Release - macOS. feature: Build 101.25102.0019. preview/ga: GA. description: Release version 20.125102.19.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-windows-defender-antivirus-platform-4-18-25110-6-engine-1-1-25110-1",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.25110.6 / Engine 1.1.25110.1",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.25110.6 / Engine 1.1.25110.1. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-triage-collection",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Triage collection",
    "summary": "Feature. feature: Triage collection. preview/ga: Preview. description: Use triage collection to prioritize incidents and hunt threats with the Sentinel Model Context Protocol (MCP) server.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-12-new-microsoft-secure-score-recommendations",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendations",
    "summary": "Feature. feature: New Microsoft Secure Score recommendations. preview/ga: GA. description: Microsoft Secure Score now includes new recommendations to help organizations proactively prevent common endpoint attack techniques: - Disable Remote Registry service on Windows: Prevents remote access to the Windows registry, reducing attack surface and blocking unauthorized configuration changes, privilege escalation, and lateral movement. - Disable NTLM authentication for Windows workstations: Helps prevent credential theft and lateral movement attacks by removing support for an outdated and insecure protocol.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-new-predictive-shielding-response-actions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predictive shielding response actions",
    "summary": "Feature. feature: New predictive shielding response actions. preview/ga: Preview. description: Defender for Endpoint now includes the GPO hardening and Safeboot hardening response actions. These actions are part of the predictive shielding feature, which anticipates and mitigates potential threats before they materialize.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-custom-data-collection",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Custom data collection",
    "summary": "Feature. feature: Custom data collection. preview/ga: Preview. description: Custom data collection enables organizations to expand and customize telemetry collection beyond default configurations to support specialized threat hunting and security monitoring needs.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-vulnerability-management-moves-under-exposure-management",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Vulnerability management moves under Exposure management",
    "summary": "Feature. feature: Vulnerability management moves under Exposure management. preview/ga: Preview. description: The Vulnerability Management section in the Microsoft Defender portal is now located under Exposure management. This change is part of the vulnerability management integration to Microsoft Security Exposure Management, which significantly expands the scope and capabilities of the platform.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-new-microsoft-secure-score-recommendations",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendations",
    "summary": "Feature. feature: New Microsoft Secure Score recommendations. preview/ga: GA. description: Microsoft Secure Score now includes new recommendations to help organizations proactively prevent common endpoint attack techniques:- Require LDAP client signing or Require LDAP server signing: Helps ensure integrity of directory requests so attackers cannot tamper with or manipulate group memberships or permissions in transit. - Encrypt LDAP client traffic: Prevents exposure of credentials and sensitive user information by enforcing encrypted communication instead of clear-text LDAP.- Enforce LDAP channel binding: Stops adversaries from hijacking or relaying authentication sessions by binding NTLM authentication to a secure TLS channel.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-defender-endpoint-security-solution-for-windows-7-sp1-and-windows-server-2008-r2-sp1",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender endpoint security solution for Windows 7 SP1 and Windows Server 2008 R2 SP1",
    "summary": "Feature. feature: Defender endpoint security solution for Windows 7 SP1 and Windows Server 2008 R2 SP1. preview/ga: Preview. description: A Defender for endpoint security solution is now available for legacy Windows 7 SP1 and Windows Server 2008 R2 SP1 devices. The solution provides advanced protection capabilities and improved functionality for these devices compared to other solutions. The new solution is available using the new Defender deployment tool.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-11-windows-defender-antivirus-platform-4-18-25100-9008-engine-1-1-25100-9002",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Windows Defender Antivirus: Platform 4.18.25100.9008 / Engine 1.1.25100.9002",
    "summary": "Release - Windows. feature: Windows Defender Antivirus: Platform 4.18.25100.9008 / Engine 1.1.25100.9002. preview/ga: GA. description: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "unified-secops-11-new-entity-behavior-analytics-ueba-experiences-in-the-defender-portal-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Entity Behavior Analytics (UEBA) experiences in the Defender portal (Preview)",
    "summary": "Microsoft Sentinel introduces new UEBA experiences in the Defender portal, bringing behavioral insights directly into key analyst workflows. These enhancements help analysts prioritize investigations and apply UEBA context more effectively. Anomaly-focused user investigations In the Defender portal, users with behavioral anomalies are automatically tagged with UEBA Anomalies, helping analysts quickly identify which users to prioritize. Analysts can view the top three anomalies from the past 30 days in a dedicated Top UEBA anomalies section, available in: User side panels accessible from various portal locations. The Overview tab of user entity pages. This section also includes direct links to anomaly queries and the Sentinel events timeline, enabling deeper investigation and faster context gathering. Drilldown to user anomalies from incident graphs Analysts can quickly access all anomalies related to a user by selecting Go Hunt > All user anomalies from the incident graph. This built-in query provides immediate UEBA context to support deeper investigation. Enriched advanced hunting and custom detections queries with behavior insights Advanced hunting and custom detection experiences now include a contextual banner that prompts analysts to join the UEBA Anomalies table to queries that include UEBA data sources. All features require UEBA to be enabled and are workspace-scoped to the currently selected workspace.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-11-new-entity-behavior-analytics-ueba-experiences-in-the-defender-portal-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Entity Behavior Analytics (UEBA) experiences in the Defender portal (Preview)",
    "summary": "Microsoft Sentinel introduces new UEBA experiences in the Defender portal, bringing behavioral insights directly into key analyst workflows. These enhancements help analysts prioritize investigations and apply UEBA context more effectively. Anomaly focused user investigations In the Defender portal, users with behavioral anomalies are automatically tagged with UEBA Anomalies, helping analysts quickly identify which users to prioritize. Analysts can view the top three anomalies from the past 30 days in a dedicated Top UEBA anomalies section, available in: User side panels accessible from various portal locations. The Overview tab of user entity pages. This section also includes direct links to anomaly queries and the Microsoft Sentinel events timeline, enabling deeper investigation and faster context gathering. Drilldown to user anomalies from incident graphs Analysts can quickly access all anomalies related to a user by selecting Go Hunt > All user anomalies from the incident graph. This built-in query provides immediate UEBA context to support deeper investigation. Enriched advanced hunting and custom detections queries with behavior insights Advanced hunting and custom detection experiences now include a contextual banner that prompts analysts to join the UEBA Anomalies table to queries that include UEBA data sources. All features require UEBA to be enabled and are workspace-scoped to the currently selected workspace.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-1-0-8217-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8217.0101",
    "summary": "Release - Android. feature: Build 1.0.8217.0101. preview/ga: GA. description: Build 1.0.8217.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-1-0-8201-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8201.0101",
    "summary": "Release - Android. feature: Build 1.0.8201.0101. preview/ga: GA. description: Build 1.0.8201.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-101-25082-0006",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25082.0006",
    "summary": "Release - macOS. feature: Build 101.25082.0006. preview/ga: GA. description: Release version 20.125082.6.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-1-1-70230101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.1.70230101",
    "summary": "Release - iOS. feature: Build 1.1.70230101. preview/ga: GA. description: Build 1.1.70230101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-1-1-69250104",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.1.69250104",
    "summary": "Release - iOS. feature: Build 1.1.69250104. preview/ga: GA. description: Build 1.1.69250104 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-platform-4-18-25100-9008-engine-1-1-25100-9002",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Platform 4.18.25100.9008 / Engine 1.1.25100.9002",
    "summary": "Release - Windows Antivirus. feature: Platform 4.18.25100.9008 / Engine 1.1.25100.9002. preview/ga: GA. description: Platform 4.18.25100.9008 and Engine 1.1.25100.9002 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-streamlined-connectivity-support-for-us-government-environments",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Streamlined connectivity support for US government environments",
    "summary": "Feature. feature: Streamlined connectivity support for US government environments. preview/ga: Preview. description: Defender for Endpoint now supports streamlined connectivity for US government cloud environments. This enhancement simplifies onboarding by reducing the number of required service endpoints and improves reliability across restricted networks.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-build-101-25092-0001",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25092.0001",
    "summary": "Release - Linux. feature: Build 101.25092.0001. preview/ga: GA. description: Release version 30.125092.0001.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-cve-exceptions",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "CVE exceptions",
    "summary": "Feature. feature: CVE exceptions. preview/ga: Preview. description: You can now use CVE exceptions to exclude specific Common Vulnerabilities and Exposures (CVEs) from analysis in your environment. CVE exceptions allow you to control what type of data is relevant to your organization and to selectively exclude certain data from your remediation efforts.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-10-new-microsoft-secure-score-recommendations",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "Oktober",
    "monthKey": "2025-10",
    "date": "Oktober 2026",
    "publishedAt": "2025-10-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Microsoft Secure Score recommendations",
    "summary": "Feature. feature: New Microsoft Secure Score recommendations. preview/ga: GA. description: Microsoft Secure Score now includes new recommendations to help organizations proactively prevent common endpoint attack techniques:- Block web shell creation on servers (reduces the risk of web-based persistence and remote code execution attacks)- Block use of copied or impersonated system tools (helps prevent attacker misuse of legitimate administrative utilities for lateral movement or privilege escalation)- Block rebooting a machine in Safe Mode: Helps defend against attackers who attempt to disable endpoint protection or persist through reboots.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-build-1-0-8102-0101",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.0.8102.0101",
    "summary": "Release - Android. feature: Build 1.0.8102.0101. preview/ga: GA. description: Build 1.0.8102.0101 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-build-101-25072-0011",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25072.0011",
    "summary": "Release - macOS. feature: Build 101.25072.0011. preview/ga: GA. description: Release version 20.125072.11.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-configure-offline-security-intelligence-updates-for-microsoft-defender-for-endpoint-on-macos",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Configure offline security intelligence updates for Microsoft Defender for Endpoint on macOS",
    "summary": "Release - macOS. feature: Configure offline security intelligence updates for Microsoft Defender for Endpoint on macOS. preview/ga: GA. description: Enables organizations to update security intelligence (antivirus definitions/signatures) on macOS endpoints offline from a local mirror server.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-build-101-25082-0003",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25082.0003",
    "summary": "Release - Linux. feature: Build 101.25082.0003. preview/ga: GA. description: Release version 30.125082.0003.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-build-101-25072-0003",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 101.25072.0003",
    "summary": "Release - Linux. feature: Build 101.25072.0003. preview/ga: GA. description: Release version 30.125072.0003.0 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-build-1-1-68200103",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Build 1.1.68200103",
    "summary": "Release - iOS. feature: Build 1.1.68200103. preview/ga: GA. description: Build 1.1.68200103 released: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "microsoft-defender-for-endpoint-09-sense-version-10-8804",
    "product": "Microsoft Defender for Endpoint",
    "productSlug": "microsoft-defender-for-endpoint",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sense version 10.8804",
    "summary": "Release - Windows. feature: Sense version 10.8804. preview/ga: GA. description: Release details are now available: See enhancements and features for this release.",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Endpoint Security",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Endpoint Security"
    ]
  },
  {
    "id": "unified-secops-09-manage-incident-workflows-with-tasks-in-microsoft-defender-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Manage Incident Workflows with Tasks in Microsoft Defender (Preview)",
    "summary": "You can now use tasks in the Microsoft Defender portal to break down incident investigations into actionable steps and assign them across your operations teams. Tasks are displayed alongside Security Copilot insights, guided responses, and reports - giving your team a unified view of progress and next steps. When you onboard Microsoft Sentinel to the Defender portal, tasks you create in Microsoft Sentinel through the Azure portal are automatically synchronized to the Defender portal.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "AI",
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-08-edit-workbooks-directly-in-the-microsoft-defender-portal-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "August",
    "monthKey": "2025-08",
    "date": "August 2026",
    "publishedAt": "2025-08-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Edit workbooks directly in the Microsoft Defender portal (Preview)",
    "summary": "Now you can create and edit Microsoft Sentinel workbooks directly in the Microsoft Defender portal. This enhancement streamlines your workflow, allows you to manage your workbooks more efficiently, and brings the workbook experience more closely aligned with the experience in the Azure portal. Microsoft Sentinel workbooks are based on Azure Monitor workbooks, and help you visualize and monitor the data ingested to Microsoft Sentinel. Workbooks add tables and charts with analytics for your logs and queries to the tools already available. Workbooks are available in the Defender portal under Microsoft Sentinel > Threat management > Workbooks.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-06-summary-rule-templates-now-in-public-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juni",
    "monthKey": "2025-06",
    "date": "Juni 2026",
    "publishedAt": "2025-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Summary rule templates now in public preview",
    "summary": "You can now use summary rule templates to deploy pre-built summary rules tailored to common security scenarios. These templates help you aggregate and analyze large datasets efficiently, don't require deep expertise, reduce setup time, and ensure best practices.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-05-case-management-now-available-for-the-defender-multitenant-portal-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Case management now available for the Defender multitenant portal (Preview)",
    "summary": "SecOps teams for large organizations and managed security service providers (MSSPs) must manage cases across multiple tenants. This can now be done without leaving the Defender multitenant portal.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-05-additions-to-soc-optimization-support-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Additions to SOC optimization support (Preview)",
    "summary": "SOC optimization support for: AI MITRE ATT&CK tagging recommendations (Preview): Uses artificial intelligence to suggest tagging security detections with MITRE ATT&CK tactics and techniques. Risk-based recommendations (Preview): Recommends implementing controls to address coverage gaps linked to use cases that may result in business risks or financial losses, including operational, financial, reputational, compliance, and legal risks.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-04-merge-incidents-manually-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Merge incidents manually (Preview)",
    "summary": "If two incidents should be merged because they describe the same attack story, but aren't merged for any of the reasons listed in \"When incidents aren't merged\", you can now merge the incidents manually after you fix the underlying reasons. For example, if the incidents weren't merged because they were assigned to two different people, you can remove the assignment of one of the incidents and then merge the incidents manually. To understand more about merging incidents, see Alert correlation and incident merging in the Microsoft Defender portal. For instructions on merging incidents manually, see Merge incidents manually in the Microsoft Defender portal.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-04-multi-workspace-and-multi-tenant-support-for-microsoft-sentinel-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Multi workspace and multi tenant support for Microsoft Sentinel (Preview)",
    "summary": "Microsoft Sentinel now supports multiple workspaces in the Defender portal, using one primary workspace per tenant and multiple secondary workspaces. A primary workspace's alerts are correlated with Defender XDR data, which results in incidents that include alerts from Microsoft Sentinel's primary workspace and Defender XDR. All other onboarded workspaces are considered secondary workspaces. Incidents are created based on the workspace’s data and won't include Defender XDR data. If you're working with multiple tenants and multiple workspaces per tenant, you can also use Microsoft Defender multitenant management to view incidents and alerts, and to hunt for data in Advanced hunting, across both multiple workspaces and tenants.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-04-cross-cloud-multitenant-management-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Cross-cloud multitenant management (Preview)",
    "summary": "Multitenant management in Microsoft Defender now supports managing tenants in other Microsoft cloud environments. Security operations teams operating in government cloud environments can now manage their entire security operations, including tenants in other Microsoft cloud environments, in a single pane of glass.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-04-security-copilot-generates-incident-summaries-in-microsoft-sentinel-in-the-azure-portal-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Security Copilot generates incident summaries in Microsoft Sentinel in the Azure portal (Preview)",
    "summary": "Microsoft Sentinel in the Azure portal now features (in Preview) incident summaries generated by Security Copilot, bringing it in line with the Defender portal. These summaries give your security analysts the up-front information they need to quickly understand, triage, and start investigating developing incidents.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-multi-workspace-and-multitenant-support-for-microsoft-sentinel-in-the-defender-portal-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Multi workspace and multitenant support for Microsoft Sentinel in the Defender portal (Preview)",
    "summary": "For preview, in the Defender portal, connect to one primary workspace and multiple secondary workspaces for Microsoft Sentinel. If you onboard Microsoft Sentinel with Defender XDR, a primary workspace's alerts are correlated with Defender XDR data. So incidents include alerts from Microsoft Sentinel's primary workspace and Defender XDR. All other onboarded workspaces are considered secondary workspaces. Incidents are created based on the workspace's data and won't include Defender XDR data. If you plan to use Microsoft Sentinel in the Defender portal without Defender XDR, you can manage multiple workspaces. But, the primary workspace doesn't include Defender XDR data and you won't have access to Defender XDR capabilities. If you're working with multiple tenants and multiple workspaces per tenant, you can also use Microsoft Defender multitenant management to view incidents and alerts, and to hunt for data in Advanced hunting, across both multiple workspaces and tenants.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Hunting"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-04-soc-optimization-support-for-unused-columns-preview",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "April",
    "monthKey": "2025-04",
    "date": "April 2026",
    "publishedAt": "2025-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SOC optimization support for unused columns (Preview)",
    "summary": "To optimize your cost/security value ratio, SOC optimization surfaces hardly used data connectors or tables. SOC optimization now surfaces unused columns in your tables.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-01-case-management-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Januar",
    "monthKey": "2025-01",
    "date": "Januar 2026",
    "publishedAt": "2025-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Case management (Preview)",
    "summary": "Case management is the first installment of an end-to-end solution that provides seamless management of your security work. SecOps teams maintain security context, work more efficiently and respond faster to attacks when they manage case work without leaving the Defender portal. Here's the initial set of scenarios and features that case management supports. Define your own case workflow with custom status values Assign tasks to collaborators and configure due dates Handle escalations and complex cases by linking multiple incidents to a case Manage access to your cases using RBAC This is just the start. Stay tuned for additional capabilities as we evolve this solution.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-01-unified-device-timeline-in-microsoft-defender-portal-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Januar",
    "monthKey": "2025-01",
    "date": "Januar 2026",
    "publishedAt": "2025-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Unified device timeline in Microsoft Defender portal (Preview)",
    "summary": "The unified device timeline, a single, cohesive view that integrates device activity from Microsoft Sentinel and Defender XDR into a single timeline, is now available in Preview. This feature streamlines security investigations by enabling analysts to access all relevant device activities in one place, reducing the need to switch between platforms and lowering incident response times.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-12-new-soc-optimization-recommendations-based-on-similar-organizations-preview",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Desember",
    "monthKey": "2024-12",
    "date": "Desember 2026",
    "publishedAt": "2024-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New SOC optimization recommendations based on similar organizations (Preview)",
    "summary": "SOC optimizations now include new recommendations for adding data sources to your workspace based on the security posture of other organizations in similar industries and sectors as you, and with similar data ingestion patterns.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Preview",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 48,
    "tags": [
      "Preview",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-06-new-defender-for-identity-security-alerts",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Defender for Identity security alerts",
    "summary": "These new alerts were added to the Defender for Identity security alerts: New alerts related to Entra ID: Anomalous activity following Global Administrator elevation Reciprocal Temporary Access Pass creation between users Suspicious service principal sign-in following credential addition Suspicious bulk user deletion via scripted activity Suspicious removal of privileged app role assignment through Graph API Suspicious sign-in by a user exhibiting a spike in account update activity User exhibiting spike in distinct application-resource access combinations New alerts related to Active Directory: DCSync attack (replication of directory services) Suspicious Entra Connect account authentication New alerts related to other identity providers: SailPoint ISC suspected brute-force attack",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Automatisering"
    ],
    "platforms": [],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Automatisering"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-06-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined SaaS application classification rules were added to the critical assets list. These classifications require onboarding to Microsoft Defender for Cloud Apps. Classification Description Microsoft Entra ID Core identity and access control plane for the tenant. Compromise can enable tenant-wide privilege escalation, persistent access, role manipulation, token abuse, application ownership takeover, and conditional access or policy tampering. Microsoft Azure Cloud infrastructure and management plane for workloads, networking, storage, and secrets. Compromise can result in full environment takeover, workload disruption, secret exposure, and governance/control-plane abuse. Microsoft 365 Defender Unified security operations and detection platform for identities, endpoints, email, and cloud apps. Compromise can blind detection, suppress or manipulate incidents and alerts, and interfere with security response actions. Microsoft Intune Endpoint management and compliance control plane for enterprise devices. Compromise can enable device reconfiguration, remote wipe/reset, BitLocker key access, policy tampering, and fleet-wide operational disruption. Microsoft Dynamics 365 Business-critical CRM and ERP platform containing customer, financial, operational, and service data. Compromise can lead to business-data exposure, process abuse, and high-impact operational disruption. Microsoft Purview Governance, compliance, and information protection platform for eDiscovery, DLP, labeling, and lifecycle controls. Compromise can cause severe compliance, legal, and regulatory impact through abuse of highly privileged governance capabilities. Microsoft SharePoint Online Enterprise content and collaboration backbone with tenant-wide access to sites, files, and document repositories. Compromise can enable bulk data exfiltration, ransomware-style impact, and widespread document exposure. Microsoft Teams Organization-wide collaboration and communication hub for chats, meetings, calls, and files. Compromise can enable surveillance, internal reconnaissance, lateral movement, and abuse of integrated SharePoint and Exchange content. Microsoft Exchange Online Primary organizational email and calendaring surface. Compromise can enable mailbox access, impersonation, phishing/BEC operations, message manipulation, and large-scale email data exfiltration. Microsoft OneDrive User and enterprise cloud file storage platform with scalable access to user content. Compromise can enable silent bulk exfiltration of sensitive files at scale. Microsoft Office Online Web-based productivity layer for document interaction for Word, Excel, and PowerPoint via browser workflows. Compromise can amplify access to enterprise documents through inherited SharePoint and OneDrive-connected data paths. Microsoft Power Apps Low-code application platform capable of connecting to business systems and data sources. Compromise can turn applications into access brokers and indirectly expose or manipulate critical connected systems. Microsoft Power Automate Workflow automation platform that enables headless data movement and orchestration for services and connectors. Compromise can support persistence, silent data transfer, and chaining throughout enterprise applications. Microsoft Power BI Business intelligence and reporting platform with access to strategic, financial, and operational analytics. Compromise can expose sensitive insight data, reports, and dashboards used for decision-making. Microsoft Universal Print Cloud print management service with service-specific printer and print-job permissions. Compromise is typically limited to a niche workload and has relatively low enterprise-wide security impact compared to core control planes.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Automatisering",
      "Endpoint",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Automatisering",
      "Endpoint",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-05-new-defender-for-identity-security-alerts",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Defender for Identity security alerts",
    "summary": "These new alerts were added to the Defender for Identity security alerts: New alerts related to Entra ID: Guest user account promoted to member User was created and assigned to Global Administrator role Failed credential abuse attempt in Entra ID authentication Malicious sign in from a randomized user agent Possible use of a stolen session cookie Stolen session cookie replay detected Suspected Conditional Access bypass via non-compliant device Suspicious addition of default third-party MFA method to user account",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-05-defender-for-identity-sensor-updates",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender for Identity sensor updates",
    "summary": "Version number Updates 2.255.19247.44775 This sensor update adds properties to Group Policy (GPO) event collection and includes bug fixes.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-entra-05-expanded-policy-storage-for-passkeys-fido2-in-microsoft-entra-id",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expanded policy storage for passkeys (FIDO2) in Microsoft Entra ID",
    "summary": "Changed feature Service category: Authentications (Logins) Product capability: User Authentication We increased the passkey (FIDO2) policy size limit in the authentication methods policy to a dedicated 20-KB allocation. Previously, all authentication methods shared a single 20-KB policy size limit. With this update, a dedicated 20-KB limit is now allocated specifically to the passkey (FIDO2) policy, while the remaining authentication methods continue to use their existing limit. This change helps address scenarios where tenants approach the overall policy size limit, which can block configuration of passkey profiles. By separating passkey policy storage, organizations can more easily adopt passkeys and configure advanced targeting scenarios. In addition, the maximum number of passkey profiles per tenant has been increased from 3 to 10.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-new-defender-for-identity-security-alerts",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Defender for Identity security alerts",
    "summary": "These new alerts were added to the Defender for Identity security alerts: New alerts related to Entra ID: Attempt to disable Defender for Identity service principal observed Suspicious Entra account enablement after disruption Suspicious Intune device registration activity Suspicious OS switch sign-in User sign-in from shared client infrastructure exhibiting anomalous activity Suspicious sign-in from an unusual user agent and IP address using PowerShell Suspicious sign-in from an unusual user agent and IP address using device code flow New alerts related to Active Directory: Suspicious on-premises account enablement after disruption Suspicious resource-based constrained delegation (RBCD) attribute change Suspicious resource-based constrained delegation (RBCD) authentication",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-02-new-defender-for-identity-security-alerts",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Defender for Identity security alerts",
    "summary": "These new alerts were added to the Defender for Identity security alerts: New alerts related to Entra ID: Suspicious user configuration change activity from Entra ID sync application Anomalous OAuth device code authentication activity Suspicious Graph API request made from Entra ID sync application Suspicious sign-in observed from Entra ID sync application Suspicious sign in with CSRF speedbump trigger New alerts related to Active Directory: Possible golden ticket attack (suspicious ticket) Possible Kerberos key list attack",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Automatisering",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-defender-for-identity-security-alerts",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Defender for Identity security alerts",
    "summary": "These new alerts were added to the Defender for Identity security alerts: New alerts related to Entra ID: Suspicious sign-in observed from Entra ID sync application to an uncommon resource app Suspicious sign-in observed to Entra ID sync application using an uncommon user agent Possible OAuth code theft detected through consent abuse Possible adversary-in-the-middle (AiTM) attack detected (ConsentFix) Skipped MFA on remembered device from uncommon ISP sign-in New alerts related to Active Directory: Pass-the-Ticket (PtT) attack Possible Active Directory Certificate Services enumeration Possible Active Directory enumeration via ADWS Suspicious NTLM authentication Possible Kerberoasting attack using a stealthy LDAP search Suspicious Kerberos authentication (TGT request using TGS-REQ)",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-11-servicenow-connector-oauth-2-0-authentication-support",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "ServiceNow connector OAuth 2.0 authentication support",
    "summary": "The ServiceNow data connector now supports OAuth 2.0 authentication in addition to Basic Authentication. This enhancement allows organizations to use modern authentication standards with client credentials flow, providing improved security through easier credential rotation and scoped authentication based on OAuth Application User roles.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-sentinel-07-microsoft-sentinel-data-lake-permissions-integrated-with-microsoft-defender-xdr-unified-rbac",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel data lake permissions integrated with Microsoft Defender XDR unified RBAC",
    "summary": "Starting in July 2025, Microsoft Sentinel data lake permissions are provided through Microsoft Defender XDR unified RBAC. Support for unified RBAC is available in addition the support provided by global Microsoft Entra ID roles.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-05-unified-identityinfo-table",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Unified IdentityInfo table",
    "summary": "Customers of Microsoft Sentinel in the Defender portal who have enabled UEBA can now take advantage of a new version of the IdentityInfo table, located in the Defender portal's Advanced hunting section, that includes the largest possible set of fields common to both the Defender and Azure portals. This unified table helps enrich your security investigations across the entire Defender portal.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 38,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-purview-06-device-onboarding",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Device Onboarding",
    "summary": "New: Monitor device health with the device health reports dashboard. Use the device health reports dashboard to monitor device onboarding status, policy update readiness, and feature readiness for Endpoint DLP.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-sentinel-05-ueba-enhancements-new-settings-experience-okta-v2-support-and-more-gcp-anomaly-detections",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "UEBA enhancements: New settings experience, Okta V2 support, and more GCP anomaly detections",
    "summary": "We introduced a new entry point and created a consolidated view for the UEBA Settings and the Behaviors Settings. You can now access the UEBA settings from the new UEBA tab in the Microsoft Sentinel settings page.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-04-update-to-defender-for-sql-servers-on-machines-plan-for-fairfax-customers",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Update to Defender for SQL servers on machines plan for Fairfax customers",
    "summary": "April 1, 2026 The Defender for SQL Server on machines plan in Microsoft Defender for Cloud protects SQL Server instances hosted on Azure, AWS, GCP, and on-premises machines. To simplify onboarding and improve protection coverage, we're releasing an enhanced agent solution for Fairfax customers at the end of April. The new solution uses the existing SQL infrastructure, so you no longer need to deploy the Azure Monitor Agent (AMA). Required customer actions: Update Defender for SQL Servers on Machines plan configuration: If you enabled the Defender for SQL Server on machines plan before April 2026, follow these instructions to update your configuration. Verify SQL Server instances protection status: With an estimated starting date of May 2026, you must verify the protection status of your SQL Server instances across your environments. Learn how to troubleshoot deployment issues for Defender for SQL on machines configuration.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "AI",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "AI",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-09-blast-radius-analysis",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Blast radius analysis",
    "summary": "Blast radius analysis is an advanced graph visualization integrated into incident investigation experience. Built on the Microsoft Sentinel data lake and graph infrastructure, it generates an interactive graph showing possible propagation paths from the selected node to predefined critical targets scoped to the user’s permissions.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "unified-secops-08-distribute-microsoft-defender-for-endpoint-security-policies-with-multitenant-management",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "August",
    "monthKey": "2025-08",
    "date": "August 2026",
    "publishedAt": "2025-08-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Distribute Microsoft Defender for Endpoint security policies with multitenant management",
    "summary": "Microsoft Defender for Endpoint security policies can now be distributed as content across multiple tenants using the Defender multitenant portal, empowering security teams to manage endpoint security policies at scale. Distributed policies are shown in the Configuration management > Endpoint security policies page in a hierarchical view so that you can identify parent policies and their distributed copies across tenants. The original policy’s page also shows the overall distribution status and lists recipient tenants and distribution profiles.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Endpoint",
      "Teams"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Endpoint",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-07-for-new-customers-only-automatic-onboarding-and-redirection-to-the-microsoft-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": "2025-07-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "For new customers only: Automatic onboarding and redirection to the Microsoft Defender portal",
    "summary": "For this update, new Microsoft Sentinel customers are customers who are onboarding the first workspace in their tenant to Microsoft Sentinel after July 1, 2025. Starting on July 1 2025, such new customers who are also: not Azure Lighthouse-delegated users and who have the permissions of a subscription Owner or a User access administrator Have their workspaces automatically onboarded to the Defender portal together with onboarding to Microsoft Sentinel. Users of such workspaces, who also aren't Azure Lighthouse-delegated users, see links in Microsoft Sentinel in the Azure portal that redirect them to the Defender portal. For example: Such users use Microsoft Sentinel in the Defender portal only. New customers who don't have relevant permissions aren't automatically onboarded to the Defender portal, but they do still see redirection links in the Azure portal, together with prompts to have a user with relevant permissions manually onboard the workspace to the Defender portal. This change streamlines the onboarding process and ensures that new customers can immediately take advantage of unified security operations capabilities without the extra step of manually onboarding their workspaces.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2025-07-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-07-microsoft-sentinel-data-lake",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel data lake",
    "summary": "Microsoft Sentinel is now enhanced with a modern data lake, purpose-built to streamline data management, reduce costs, and accelerate AI adoption for security operations teams. The new Microsoft Sentinel data lake offers cost-effective, long-term storage, eliminating the need to choose between affordability and robust security. Security teams gain deeper visibility and faster incident resolution, all within the familiar Microsoft Sentinel experience, enriched through seamless integration with advanced data analytics tools. Key benefits of the Microsoft Sentinel data lake include: +Single, open-format data copy for efficient and cost-effective storage +Separation of storage and compute for greater flexibility +Support for multiple analytics engines to unlock deeper insights from your security data +Native integration with Microsoft Sentinel, including the ability to select tiering for log data across analytics and lake tiers",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI",
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "AI",
      "Teams"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-07-table-management-and-retention-settings-in-the-microsoft-defender-portal",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Table management and retention settings in the Microsoft Defender portal",
    "summary": "Table management and retention settings are now available in the Microsoft Defender portals. You can view and manage table settings in the Microsoft Defender portal, including retention settings for Microsoft Sentinel and Defender XDR tables, and switch between analytics and data lake tiers.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-07-for-new-customers-only-automatic-onboarding-and-redirection-to-the-microsoft-defender-portal",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": "2025-07-01",
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "For new customers only: Automatic onboarding and redirection to the Microsoft Defender portal",
    "summary": "For this update, new Microsoft Sentinel customers are customers who are onboarding the first workspace in their tenant to Microsoft Sentinel on or after July 1, 2025. Starting July 1, 2025, such new customers who have the permissions of a subscription Owner or a User access administrator, and are also not Azure Lighthouse-delegated users, have their workspaces automatically onboarded to the Defender portal together with onboarding to Microsoft Sentinel. Users of such workspaces, who also aren't Azure Lighthouse-delegated users, see links in Microsoft Sentinel in the Azure portal that redirect them to the Defender portal. Such users use Microsoft Sentinel in the Defender portal only. New customers who don't have relevant permissions aren't automatically onboarded to the Defender portal, but they do still see redirection links in the Azure portal, together with prompts to have a user with relevant permissions manually onboard the workspace to the Defender portal. This change streamlines the onboarding process and ensures that new customers can immediately take advantage of unified security operations capabilities without the extra step of manually onboarding their workspaces.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
    "impactLevel": "Middels",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 33,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Middels påvirkning: relevant for produksjonsbruk, drift eller sikkerhetsforbedring.",
      "Ikrafttredelse: 2025-07-01",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-07-automatic-rpc-auditing-on-domain-controllers",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Automatic RPC auditing on domain controllers",
    "summary": "Defender for Identity now automatically enables RPC auditing on domain controllers when you upgrade to sensor version 3.0.8 or later. You no longer need to apply a tag manually to enable RPC auditing.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-support-for-additional-azure-regions-in-the-uae-geography-for-defender-for-apis-and-api-security-posture-management-with-defender-cspm",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": "2026-06-30",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Support for additional Azure regions in the UAE geography for Defender for APIs and API security posture management with Defender CSPM",
    "summary": "June 30, 2026 Microsoft Defender for APIs and API security posture management with Defender CSPM has expanded to provide its capabilities in the following Azure regions: UAE North UAE Central Customers who have Azure API Management services in these regions can now use the capabilities offered by Microsoft Defender for APIs and API security posture management with Defender CSPM. API discovery and security posture capabilities in Defender CSPM for Azure Function Apps and Azure Logic Apps have also been expanded to these regions. Learn more about Microsoft Defender for APIs and API security posture management with Defender CSPM.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Frist: 2026-06-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-06-expanded-container-support-for-cloud-scopes",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Expanded container support for cloud scopes",
    "summary": "June 17, 2026 Microsoft Defender for Cloud has expanded the supported environment primitives for cloud scopes to include additional container-related resources. Cloud scopes now support the following new environment types: K8s namespace: Organize resources by Kubernetes namespace for granular access control K8s cluster: Group entire Kubernetes clusters for comprehensive security management Registry (multi cloud): Include container registries from multiple cloud providers Repository (multi cloud): Manage artifact repositories across different cloud platforms These additions provide greater flexibility when grouping container and Kubernetes resources, helping you better align cloud scopes with operational boundaries and security requirements across multicloud environments. Learn more about cloud scopes.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Automatisering",
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Automatisering",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-06-new-predefined-classifications-for-ai-agents",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications for AI agents",
    "summary": "The following predefined AI agent classification rules were added to the critical assets list: Classification Description Executive-Sponsored AI Agent This rule applies to AI agents that are created or owned by senior executives in the organization. As such, these agents may be granted access to sensitive data and act on the executive's behalf. Compromise could lead to unauthorized actions performed under executive authority, and exposure of sensitive executive-level data - without the executive's identity being directly compromised.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "AI",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-entra-06-upcoming-change-improved-restore-experience-for-device-bound-authenticator-app-passkeys-on-ios",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Upcoming change - Improved restore experience for device-bound Authenticator app passkeys on iOS",
    "summary": "Plan for change Service category: Microsoft Authenticator App Product capability: Identity Security & Protection No action is required. What is changing? Starting August 2026, users will see an improved restore experience for device-bound Authenticator app passkeys for iOS users. No admin or user action is required. With this update: Users who already have iCloud and iCloud Keychain backup enabled for the Authenticator app—and have device-bound Authenticator passkeys on their old device—will automatically benefit from this improved experience. Users restoring their Authenticator app on a new iOS device will experience an updated restore flow. This change streamlines the restore experience by directing users to the right recovery path based on access to their old device and helping them understand cross-device passkey authentication, resulting in a smoother transition to a new phone. This update applies to iOS devices only. Android support will follow. Learn more about the changes to backup and restore in Authenticator app.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-05-sensor-v3-x-supports-all-identity-roles-on-domain-controllers",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensor v3.x supports all identity roles on domain controllers",
    "summary": "Defender for Identity sensor v3.x now supports domain controllers running all identity roles, including Microsoft Entra Connect, AD FS, and AD CS identity roles. For deployment details, see Defender for Identity sensor v3.x prerequisites.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-05-increased-sensor-capacity",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Increased sensor capacity",
    "summary": "Defender for Identity now supports up to 1,000 sensors per workspace, increased from the previous limit of 350. To add more than 1,000 sensors, contact Defender for Identity support.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-microsoft-defender-experts-for-servers-as-a-managed-xdr-option",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Defender Experts for Servers as a managed XDR option",
    "summary": "May 18, 2026 Defender for Cloud is now partnered with Microsoft Defender Experts, as a managed extended detection and response (XDR) service for server workloads. Microsoft analysts and automation work together to detect, prioritize, and respond to threats on machines protected by Defender for Servers Plan 1 or Plan 2 across Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and on-premises environments. Defender Experts for Servers is sold separately and includes Defender Experts for Hunting and Ask Defender Experts. Learn more about Microsoft Defender Experts for Servers.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Hunting",
      "Automatisering",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Hunting",
      "Automatisering",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-05-new-predefined-classification",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classification",
    "summary": "The following predefined Device classification rule was added to the critical assets list: Classification Description Senior Executive User Workstation Devices in frequent use by users classified as senior executives. This rule logic relies on the predefined critical identity classifications whose names start with \"Senior Executive\".",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Endpoint",
      "Governance"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-entra-05-upcoming-change-enhanced-admin-authorization-for-microsoft-entra-connect-sync-configuration-changes",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Upcoming change - Enhanced admin authorization for Microsoft Entra Connect Sync configuration changes",
    "summary": "Changed feature Service category: Entra Connect Product capability: Entra Connect We're enhancing the security posture of Microsoft Entra Connect Sync by introducing interactive admin authorization for configuration changes. With this update, an authorized administrator will need to sign in and explicitly approve changes to sync settings, ensuring that configuration updates are intentional and made by the right person. What’s changing Interactive admin authorization for sync configuration changes: Going forward, changes to sync configuration settings – such as enabling or disabling features – will require interactive authentication from an authorized cloud administrator. Whether you're using the Entra Connect wizard or PowerShell, a verified admin sign-in will be required to complete the action. This strengthens the authorization model for all sync-related configuration changes. Greater consistency in admin-driven configuration: We are aligning sync behavior so that configuration decisions made by cloud administrators are consistently respected. The cloud will serve as the source of truth for sync feature state, giving administrators greater confidence that their intended configuration is maintained. Updated management paths: All management interfaces for Entra Connect will incorporate delegated admin authentication where needed. Specifically: Entra Connect wizard flows: The installation and configuration wizard will use delegated admin tokens for sync configuration changes, providing a more secure authorization flow. PowerShell cmdlets: PowerShell-based management of sync settings will now prompt for an interactive admin sign-in to complete configuration changes. Ensure you run these commands in a session where you can provide admin credentials. Uninstall behavior: If you uninstall Entra Connect Sync and choose to make cloud-side changes such as converting the tenant to cloud-only synchronization, the uninstall process will require admin authentication before modifying settings in the cloud tenant. What’s not changing Sync functionality and the end-user experience remain unchanged. Everything continues to work as expected when features are enabled or disabled. There is no change to how administrators choose to enable or disable sync features; only that these actions now require interactive authentication. The Microsoft Entra Connect Sync .msi installation file for this change is exclusively available on Microsoft Entra admin center under Microsoft Entra Connect. Check our version history page for more details on available versions.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "security-exposure-management-04-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined Cloud resource classification rule was added to the critical assets list: Classification Description APIs with Sensitive Data This rule applies to APIs that contain sensitive data. This often indicates that the API is used for critical production workloads, and might require additional monitoring and protection.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Automatisering",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Automatisering",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-sensor-v3-x-support-for-domain-controllers-with-microsoft-entra-connect-identity-roles",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensor v3.x support for domain controllers with Microsoft Entra Connect identity roles",
    "summary": "Defender for Identity sensor v3.x now supports domain controllers that run Microsoft Entra Connect, including detections and identity security posture management (ISPM) recommendations. Detections and ISPM recommendations for additional identity roles, including AD FS and AD CS, will become available soon. Domain controllers with Microsoft Entra Connect roles and v3.x of the sensor must run Windows Server 2019 or later and include at least the March 2026 Cumulative Update. For deployment details, see Defender for Identity deployment overview and Sensor v3.x prerequisites.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-defender-for-identity-sensor-updates",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender for Identity sensor updates",
    "summary": "Sensor versions now display the full version number (for example, 2.255.19201.14651) instead of only the major/minor version (for example, 2.255). This makes it easier to identify the exact update installed on each sensor. When you validate upgrades or troubleshoot, the last two numbers in the version (for example, 19201.14651) show which update is installed. Version number Updates 2.255.19243.47944 This sensor update includes bug fixes. 2.255.19201.14651 This sensor update includes bug fixes.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-updates-to-secure-score-category-calculations-for-increased-accuracy",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Updates to Secure Score category calculations for increased accuracy",
    "summary": "To improve accuracy and better protect organizational identities, some security recommendations categorized as Cloud apps recommendations are now considered identity-related and grouped under the Identity category. While the total Secure Score remains unchanged, individual identity and app scores may change.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-03-continued-rollout-of-new-health-alert-sensor-v3-x-rpc-audit-misconfigured",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Continued rollout of new health alert: Sensor v3.x RPC audit misconfigured",
    "summary": "The Sensor v3.x RPC Audit Misconfigured health alert is continuing to be rolled out gradually to customers. The new health alert helps identify v3.x sensors where Enhanced RPC auditing configuration is either missing or incorrectly applied. Enhanced RPC auditing is required for some Microsoft Defender for Identity advanced identity detections.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-03-updates-to-secure-score-category-calculations-for-increased-accuracy",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Updates to Secure Score category calculations for increased accuracy",
    "summary": "To improve accuracy and better protect organizational identities, some security recommendations categorized as Cloud apps recommendations are now considered identity‑related and grouped under the Identity category. While the total Secure Score remains unchanged, individual identity and app scores may change.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-02-defender-for-identity-sensor-updates",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Defender for Identity sensor updates",
    "summary": "Version number Updates 2.255 This sensor update includes bug fixes.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-entra-02-upcoming-changes-jailbreak-root-detection-in-authenticator-app",
    "product": "Microsoft Entra",
    "productSlug": "microsoft-entra",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Upcoming Changes – Jailbreak/root Detection in Authenticator App",
    "summary": "New feature Service category: Microsoft Authenticator App Product capability: Identity Security & Protection Starting February 2026, Microsoft Authenticator will introduce jailbreak/root detection for Microsoft Entra credentials in the Authenticator app. The rollout progresses from warning mode → blocking mode. Users must move to compliant devices to continue using Microsoft Entra accounts in Authenticator.",
    "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity & Access",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity & Access"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-health-alert-sensor-v3-x-rpc-audit-misconfigured",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Health Alert: Sensor v3.x RPC Audit Misconfigured",
    "summary": "Enhanced RPC auditing is required for some Microsoft Defender for Identity advanced identity detections. A new health alert helps identify v3.x sensors where this configuration is either missing or incorrectly applied. The alert is being rolled out gradually to customers.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-entra-id-user-roles-to-support-remediation-actions",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New Entra ID user roles to support remediation actions",
    "summary": "For some remediation actions, Defender for Identity creates an enterprise application in Microsoft Entra ID. The Microsoft Defender for Identity enterprise application is created automatically in the tenant and is used only to execute remediation actions. When a user initiates an action from the Defender portal, the request is authorized based on the user's Entra ID roles and executed by the Defender for Identity application, enforcing Entra ID role-based access control (RBAC) and audit logging. These new Entra ID roles are supported: User Administrator Authentication Administrator Privileged Authentication Administrator Directory Writers Helpdesk Administrator Security Operator",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-automatic-windows-event-auditing-configuration-for-defender-for-identity-sensors-v3-x",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Automatic Windows event auditing configuration for Defender for Identity sensors v3.x",
    "summary": "We're gradually rolling out automatic Windows event-auditing configuration for sensors v3.x, along with related health alerts. Automatic Windows event-auditing streamlines deployment by automatically applying the required auditing settings to new sensors and correcting misconfigurations on existing ones. This update might identify existing auditing configuration gaps that weren't previously detected. To ensure consistent protection, we recommend that you make sure all servers with the v3 sensors are configured with: The latest Windows cumulative update. Automatic Windows event auditing enabled.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-security-posture-assessment-identify-service-accounts-in-privileged-groups",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New security posture assessment: Identify service accounts in privileged groups",
    "summary": "This identity security posture assessment lists Active Directory service accounts with direct or nested membership in privileged groups. You can use this assessment to identify service accounts with elevated permissions and take action when privileged access isn't required.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-new-security-posture-assessment-locate-accounts-in-built-in-operator-groups",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New security posture assessment: Locate accounts in built-in Operator Groups",
    "summary": "This identity security posture assessment lists Active Directory accounts that are members of built-in Operator Groups, including direct and indirect membership. You can use this assessment to review legacy or unnecessary operator access and take action when elevated access isn't required.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-01-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined Device classification rule was added to the critical assets list: Classification Description WSUS Server Centralized Windows update management service used to approve and distribute Microsoft software updates and security patches to Windows devices across an organization. Compromise could enable distribution of malicious updates or disruption of security patching, increasing exposure risk across managed Windows endpoints.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Endpoint",
      "Governance"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-sentinel-01-new-detections-for-sentinel-solution-for-sap-btp",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New detections for Sentinel solution for SAP BTP",
    "summary": "This update expands detection coverage for SAP BTP, strengthening visibility into high‑risk control plane, integration, and identity activities. SAP Integration Suite: Detects unauthorized changes to integration artifacts, access policies, JDBC data sources, and package imports that could enable data exfiltration or backdoors. SAP Cloud Identity Service: Monitors user deletions, privilege grants, and SAML/OIDC configuration changes that weaken authentication controls or create persistent access. SAP Build Work Zone: Identifies mass role deletions and unauthorized access to restricted portal resources. SAP BTP Audit Logging: Detects audit log ingestion gaps and disruptions that reduce security visibility and enable stealthy activity.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-12-adws-ldap-search-in-advanced-hunting",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Desember",
    "monthKey": "2025-12",
    "date": "Desember 2026",
    "publishedAt": "2025-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "ADWS LDAP search in Advanced Hunting",
    "summary": "New ADWS LDAP search activity is now available in the 'IdentityQueryEvents' table in Advanced Hunting. This can provides visibility into directory queries performed through ADWS, helping customers track these operations and create custom detection based on this data. Version number Updates 2.253 Includes bug fixes and stability improvements for the Microsoft Defender for Identity sensor. 2.252 Includes bug fixes and stability improvements for the Microsoft Defender for Identity sensor.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Hunting"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-11-identity-inventory-enhancements-accounts-tab-manual-account-linking-and-unlinking-and-expanded-remediation-actions",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Identity Inventory enhancements: Accounts tab, manual account linking and unlinking, and expanded remediation actions",
    "summary": "The following new features are now available in Microsoft Defender for Identity: Accounts tab in Identity Inventory: A new Accounts tab provides a consolidated view of all accounts associated with an identity, including accounts from Active Directory, Microsoft Entra ID, and supported non-Microsoft identity providers.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-11-microsoft-defender-for-identity-sensor-version-updates",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Defender for Identity sensor version updates",
    "summary": "Version number Updates 2.250 The improved event log query method captures a broader range of unique events at scale. As a result, you might notice an increase in captured activities. This update also includes security and performance improvements.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Identitet",
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Hunting"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "security-exposure-management-09-critical-assets-classified-based-on-interaction-with-sensitive-documents-purview-edlp",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Critical assets classified based on interaction with sensitive documents (Purview eDLP)",
    "summary": "Microsoft Security Exposure Management now integrates with Microsoft Purview Endpoint Data Loss Prevention (eDLP) to automatically identify and classify critical assets based on their interaction with sensitive documents. This new capability introduces dynamic criticality reclassification where endpoints accessing high-sensitivity documents are automatically tagged as high criticality. Key features include: Dynamic reclassification: Endpoints are automatically elevated to high criticality when accessing sensitive content Automatic reversion: Asset classification reverts to baseline after 5 consecutive days of inactivity with sensitive content Out-of-the-box detection: Built-in detection rules for three Purview Classifier Sensitive Information Types: Azure Document DB Auth Key Azure Redis Cache Connection String Azure Storage Account Key Enhanced visibility: Critical assets are surfaced across Microsoft Defender XDR experiences for improved security posture management This integration provides the first offering to combine the experience between Purview and Microsoft Defender Portal for classifying critical assets and gathering important prebreach insights.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-09-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined Device classification rules were added to the critical assets list: Classification Description SharePoint Server The SharePoint server is responsible for secure content management, collaboration, and document sharing across teams. It hosts intranet portals and enterprise search within an organization. Compromise could lead to unauthorized access to sensitive information and disruption of content services. Microsoft Entra ID Cloud Sync The Microsoft Entra ID Cloud Sync agent is responsible for syncing on-premises directory data to the Microsoft Entra ID tenant using lightweight infrastructure. Compromise could disrupt identity synchronization, leading to authentication issues and potential security breaches. Microsoft Entra ID Cloud Sync has been introduced alongside Microsoft Entra ID Connect. While both support identity synchronization, Microsoft Entra ID Connect is designed for hybrid environments with on-premises Active Directory, whereas Microsoft Entra ID Cloud Sync offers a lightweight, cloud-native solution optimized for cloud-only setups. Additionally, SharePoint device role is now available, introduced in response to recent vulnerability events. This role enhances tracking and management of SharePoint-related assets.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "AI",
      "Endpoint",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI",
      "Endpoint",
      "Teams",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-03-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Mars",
    "monthKey": "2025-03",
    "date": "Mars 2026",
    "publishedAt": "2025-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined Identity classification rules were added to the critical assets list: Classification Description Senior Executive (Technology) This rule applies to identities classified as senior executives in the field of Technology. Senior Executive (Finance) This rule applies to identities classified as senior executives in the field of Finance. Senior Executive (Operations) This rule applies to identities classified as senior executives in the field of Operations. Senior Executive (Marketing) This rule applies to identities classified as senior executives in the field of Marketing. Senior Executive (Information) This rule applies to identities classified as senior executives in the field of Information. Senior Executive (Execution) This rule applies to identities classified as senior executives in the field of Execution. Senior Executive (Human Resources) This rule applies to identities classified as senior executives in the field of Resources. Security Operations Admin User This rule applies to security operations admin users that configure, manage, monitor, and respond to threats within the organization.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-12-new-documentation-library-for-unified-security-operations-in-the-microsoft-defender-portal",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Desember",
    "monthKey": "2024-12",
    "date": "Desember 2026",
    "publishedAt": "2024-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New documentation library for unified security operations in the Microsoft Defender portal",
    "summary": "Find centralized documentation about unified security operations in the Microsoft Defender portal. The Defender portal brings together the full capabilities of Microsoft Sentinel, Microsoft Defender XDR, Microsoft Security Exposure Management, and generative AI. Learn about the features and functionality available for unified security operations, and then start to plan your deployment.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "AI"
    ],
    "platforms": [],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "AI"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-microsoft-security-exposure-management-is-now-supported-in-microsoft-defender-unified-role-based-access-control-rbac",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Security Exposure Management is now supported in Microsoft Defender unified role-based access control (RBAC)",
    "summary": "Access control to Microsoft Security Exposure Management can now be managed using Microsoft Defender unified Role-Based Access Control (RBAC) permissions model with dedicated and granular permissions. This new capability enables admins to grant their posture managers with access to Exposure Management data and experiences with the least privilege access approach rather than the Microsoft Azure Entra ID roles, which is still supported and can be used if needed. To learn more about Microsoft Security Exposure Management access management using Microsoft Defender unified RBAC permissions model, see Prerequisites and support. To learn more about creating new custom roles in Microsoft Defender unified RBAC, see Create custom roles in Microsoft Defender unified RBAC.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Identitet",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 28,
    "tags": [
      "Ikke oppgitt",
      "Identitet",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-07-foundational-cspm-moves-to-opt-in-model-for-new-azure-subscriptions",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": "2026-07-30",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Foundational CSPM moves to opt-in model for new Azure subscriptions",
    "summary": "July 30, 2026 Starting October 27, 2026, Foundational CSPM will move to an opt-in model and will no longer be enabled by default for new Azure subscriptions. This change gives you more control over how security posture management is configured for each new Azure subscription and is part of the transition of cloud security posture management to the Microsoft Defender portal. Foundational CSPM will continue to be available at no cost and can be enabled at any time based on your organization's needs. This change applies only to new Azure subscriptions. Existing Azure subscriptions keep their current configuration, and AWS and GCP environments aren't affected.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Frist: 2026-07-30",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "security-exposure-management-07-ot-data-connectors-in-microsoft-security-exposure-management",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Juli",
    "monthKey": "2026-07",
    "date": "Juli 2026",
    "publishedAt": "2026-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "OT data connectors in Microsoft Security Exposure Management",
    "summary": "Microsoft Security Exposure Management now supports operational technology (OT) data connectors for Armis, Dragos, and Forescout. OT data connectors bring OT asset and vulnerability data from supported third-party OT platforms into the Defender portal. This helps security teams view OT devices alongside other assets, enrich device inventory with OT context, and investigate vulnerabilities across IT and OT environments.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint",
      "Teams"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint",
      "Teams"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-purview-06-sensitive-information-types",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Juni",
    "monthKey": "2026-06",
    "date": "Juni 2026",
    "publishedAt": "2026-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitive information types",
    "summary": "New: Added definitions for the following sensitive information types: China physical addresses Colombia national ID Colombia tax identification number Greenland physical addresses Russia physical addresses Russia taxpayer identification number Singapore physical addresses South Africa physical addresses Ukraine physical addresses",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-updated-helm-installation-for-defender-for-containers-sensor",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-06",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Updated Helm installation for Defender for Containers sensor",
    "summary": "May 6, 2026 Defender for Containers sensor installation using Helm now uses direct Helm chart deployment instead of installation scripts. The updated flow includes environment-specific Helm commands for Azure Kubernetes Service (AKS), Amazon Elastic Kubernetes Service (EKS), and Google Kubernetes Engine (GKE) clusters. Learn more about installing the Defender for Containers sensor by using Helm.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-05-daily-score-calculation-enhancement-for-risk-based-cloud-secure-score",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Daily score calculation enhancement for risk-based Cloud secure score",
    "summary": "May 5, 2026 We've improved how daily Cloud secure score values are calculated to more accurately reflect your posture and the impact of actions taken throughout the day. Daily scores represent end-of-day snapshots instead of averaged values over the course of the day, providing a more consistent and precise view of the score at each point in time. This helps you better understand score changes and correlate them with changes introduced during the day. Historical values have been recalculated to align with this definition, so you may notice slight differences when comparing trends across this period.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-05-data-loss-prevention",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Loss Prevention",
    "summary": "d: Added the admin permissions (Directory Reader, Microsoft Edge administration, and Microsoft Intune administration) required to activate DLP policies for unmanaged cloud apps in Microsoft Edge for Business.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-05-data-security-investigations",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mai",
    "monthKey": "2026-05",
    "date": "Mai 2026",
    "publishedAt": "2026-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Security Investigations",
    "summary": "New: OCR support in Data Security Investigations. Image files are automatically processed with optical character recognition (OCR), and the extracted text is merged and vectorized for AI analysis. New: Custom examinations in Data Security Investigations. Define your own examination focus with custom prompts to analyze investigation content beyond the built-in examination areas. Updated: New guidance for working with large audit search results in Data Security Investigations. When audit searches exceed the approximately 3,000-item limit, use the Audit solution to analyze the full result volume, then split searches into smaller time-based slices for ingestion into an investigation.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "AI"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-purview-04-data-lifecycle-management",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "April",
    "monthKey": "2026-04",
    "date": "April 2026",
    "publishedAt": "2026-04-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Data Lifecycle Management",
    "summary": "New: Newly created Teams call data records (often abbreviated to CDRs, and sometimes also called call detail records or just call records) are no longer included with Teams chat retention policies. Instead, they are included in the new support for Teams call logs retention policies that you create by using PowerShell. These newly supported retention policies let you manage the deletion of calling-related data when this is required for compliance and regulatory requirements. Call data records previously included in Teams chat retention policies continue to be managed by those same policies.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Teams"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Teams"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-malware-automated-remediation-in-defender-for-storage",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-31",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "day",
    "estimatedDate": false,
    "title": "Malware automated remediation in Defender for Storage",
    "summary": "March 31, 2026. category: GA. update: Malware automated remediation in Defender for Storage",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-file-integrity-monitoring-requires-mde-agent-version-10-8799-for-legacy-windows-machines",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "File Integrity Monitoring requires MDE agent version 10.8799+ for legacy Windows machines",
    "summary": "Due to a pipeline change in Microsoft Defender for Endpoint (MDE), File Integrity Monitoring now requires the Defender for Servers Windows client (Microsoft Defender for Endpoint agent) version 10.8799 or above for proper functionality on legacy Windows machines (downlevel clients). Key details: Affected systems: Legacy Windows machines (Windows Server 2016, Windows Server 2012 R2, and other downlevel clients) Required version: Defender for Servers Windows client (MDE agent) 10.8799 or later Impact: FIM monitoring won't function properly on versions below the minimum requirement Learn more about File Integrity Monitoring and how to enable File Integrity Monitoring.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "AI",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "AI",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-03-severity-based-risk-assignment-for-not-evaluated-recommendations",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Severity-based risk assignment for \"Not evaluated\" recommendations",
    "summary": "March 11, 2026 Recommendations that previously appeared as Not evaluated will now receive a risk level derived from the recommendation severity. As a result, these recommendations will now be prioritized in the recommendations list based on their assigned risk level. This change may affect the overall status of recommendations and will also impact Secure Score, as previously recommendations that weren't evaluated are now included in risk calculations. For customers without Defender CSPM enabled, this update removes the Not evaluated risk state and replaces it with severity‑based risk. To benefit from full contextual, environment-aware risk evaluation, Defender CSPM must be enabled on the subscription.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-03-deployment-models",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Mars",
    "monthKey": "2026-03",
    "date": "Mars 2026",
    "publishedAt": "2026-03-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Deployment models",
    "summary": "d: Expanded Microsoft Purview deployment models with comprehensive step-by-step inline guides for five deployment scenarios: Prevent data leak to shadow AI, Secure and govern Microsoft 365 Copilot agents, Deploy and use Data Security Posture Management, Lightweight guide to mitigate data leakage, and Reduce false positives with SITs and advanced classifiers. Previously available only as downloadable PPTX and PDF files, each model now includes detailed articles following a step-based workflow.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "AI",
      "Governance"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "AI",
      "Governance"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-cloud-02-scanning-support-for-minimus-and-photon-os-container-images",
    "product": "Microsoft Defender for Cloud",
    "productSlug": "microsoft-defender-for-cloud",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": "2026-02-10",
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Scanning support for Minimus and Photon OS container images",
    "summary": "February 10, 2026 Microsoft Defender for Cloud's vulnerability scanner, powered by Microsoft Defender Vulnerability Management, is extending its scanning coverage to Minimus and Photon OS container images to help validate that they're shipping the most secure builds possible. As additional image types are scanned, your bill might increase. For all supported distributions, see Registries and images support for vulnerability assessment.",
    "url": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "release-notes",
    "sourceName": "Microsoft Learn",
    "category": "Cloud Security",
    "themes": [
      "Container",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Container",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Frist: 2026-02-10",
      "Kildetype: Microsoft Learn / release-notes",
      "Kategori: Cloud Security"
    ]
  },
  {
    "id": "microsoft-purview-02-sensitivity-labels",
    "product": "Microsoft Purview",
    "productSlug": "microsoft-purview",
    "month": "Februar",
    "monthKey": "2026-02",
    "date": "Februar 2026",
    "publishedAt": "2026-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensitivity labels",
    "summary": "New: The client-side improvements for sensitivity labels that extend SharePoint permissions to downloaded documents that started to roll out to Windows version 2601+ in January for the Current Channel is complete, and now also available with the Monthly Enterprise Channel.",
    "url": "https://learn.microsoft.com/en-us/purview/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Data Security & Governance",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Data Security & Governance"
    ]
  },
  {
    "id": "microsoft-defender-for-identity-01-sensor-updates",
    "product": "Microsoft Defender for Identity",
    "productSlug": "microsoft-defender-for-identity",
    "month": "Januar",
    "monthKey": "2026-01",
    "date": "Januar 2026",
    "publishedAt": "2026-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Sensor updates",
    "summary": "Version number Updates 2.254 The sensor now supports a new DNS zone target for *.atp.gcc.azure.com. Make sure your sensors in GCC can access this zone with your sensor DNS prefix.",
    "url": "https://learn.microsoft.com/en-us/defender-for-identity/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Identity Security",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Identity Security"
    ]
  },
  {
    "id": "unified-secops-11-microsoft-threat-intelligence-alert-enhancements-for-microsoft-sentinel-customers-in-the-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "November",
    "monthKey": "2025-11",
    "date": "November 2026",
    "publishedAt": "2025-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Threat Intelligence alert enhancements for Microsoft Sentinel customers in the Defender portal",
    "summary": "Microsoft Sentinel customers using the Defender portal, or the Azure portal with the Microsoft Sentinel Defender XDR data connector, now also benefit from Microsoft Threat Intelligence alerts that highlight activity from nation-state actors, major ransomware campaigns, and fraudulent operations. To view these alert types, you must have the Security Administrator or Global Administrator role. The Service Source, Detection Source, and Product Name values for these alerts are listed as Microsoft Threat Intelligence.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "security-exposure-management-09-new-data-connectors",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New data connectors",
    "summary": "We have added new data connectors for Wiz and Palo Alto Prisma. These connectors enable seamless integration of vulnerability and asset data from leading cloud security platforms into Microsoft Security Exposure Management, providing enhanced visibility and context for your environments.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-09-refined-attack-path-experience",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Refined attack path experience",
    "summary": "Cloud Attack Paths now reflect real, externally driven and exploitable risks that adversaries could use to compromise your organization, helping you cut through the noise and act faster. The paths now focus on external entry points and how attackers could progress through your environment reaching business-critical targets. On-premises Attack Path now terminates automatically when they reach End Game assets (Domain Admins, Enterprise Admins, Administrators, or Domain Controllers). These assets provide full domain control if compromised. The visualization and prioritization of attack path risks for on-premises infrastructure provide consistent clarity, enabling security teams to focus on high-impact scenarios and reduce noise. The changes bring greater clarity, focus, and prioritization empowering security teams to mitigate the most critical risks with confidence. Read more about it in this blog: Refining Attack Paths: Prioritizing Real-World, Exploitable Threats",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "microsoft-sentinel-09-microsoft-sentinel-is-evolving-into-a-siem-and-platform",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "September",
    "monthKey": "2025-09",
    "date": "September 2026",
    "publishedAt": "2025-09-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel is evolving into a SIEM and platform",
    "summary": "Security is being reengineered for the AI era, moving beyond static, rule-based controls and post-breach response toward platform-led, machine-speed defense. To address the challenge of fragmented tools, sprawling signals, and legacy architectures that can't match the velocity and scale of modern attacks, Microsoft Sentinel has evolved into both a SIEM and a platform that unifies data for agentic defense. This update reflects architectural enhancements that support AI-driven security operations at scale.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "AI"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "AI"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "unified-secops-08-edit-workbooks-directly-in-the-microsoft-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "August",
    "monthKey": "2025-08",
    "date": "August 2026",
    "publishedAt": "2025-08-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Edit workbooks directly in the Microsoft Defender portal",
    "summary": "Now you can create and edit Microsoft Sentinel workbooks directly in the Microsoft Defender portal. This enhancement streamlines your workflow and allows you to manage your workbooks more efficiently and brings the workbook experience more closely aligned with the experience in the Azure portal. Microsoft Sentinel workbooks are based on Azure Monitor workbooks, and help you visualize and monitor the data ingested to Microsoft Sentinel. Workbooks add tables and charts with analytics for your logs and queries to the tools already available. Workbooks are available in the Defender portal under Microsoft Sentinel > Threat management > Workbooks.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-08-tenant-groups-in-multitenant-management-renamed-to-distribution-profiles",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "August",
    "monthKey": "2025-08",
    "date": "August 2026",
    "publishedAt": "2025-08-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Tenant groups in multitenant management renamed to distribution profiles",
    "summary": "In the multitenant portal, tenant groups are now renamed to content distribution profiles. Functionality remains the same: Content distribution profiles enable you to distribute security content, including custom detection rules and endpoint security policies, at scale across all of your tenants, based on categories like business groups or location. For example:",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-07-no-limit-on-the-number-of-workspaces-you-can-onboard-to-the-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "No limit on the number of workspaces you can onboard to the Defender portal",
    "summary": "There is no longer any limit to the number of workspaces you can onboard to the Defender portal. Limitations still apply to the number of workspaces you can include in a Log Analytics query, and in the number of workspaces you can or should include in a scheduled analytics rule.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Hunting"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "microsoft-sentinel-07-no-limit-on-the-number-of-workspaces-you-can-onboard-to-the-defender-portal",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juli",
    "monthKey": "2025-07",
    "date": "Juli 2026",
    "publishedAt": "2025-07-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "No limit on the number of workspaces you can onboard to the Defender portal",
    "summary": "There is no longer any limit to the number of workspaces you can onboard to the Defender portal. Limitations still apply to the number of workspaces you can include in a Log Analytics query, and in the number of workspaces you can or should include in a scheduled analytics rule.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Hunting"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Hunting"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-06-codeless-connector-platform-ccp-renamed-to-codeless-connector-framework-ccf",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juni",
    "monthKey": "2025-06",
    "date": "Juni 2026",
    "publishedAt": "2025-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Codeless Connector Platform (CCP) renamed to Codeless Connector Framework (CCF)",
    "summary": "The Microsoft Sentinel Codeless Connector Platform (CCP) has been renamed to Codeless Connector Framework (CCF). The new name reflects the platform's evolution and avoids confusion with other platform-oriented services, while still providing the same ease of use and flexibility that users have come to expect.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "microsoft-sentinel-06-consolidated-microsoft-sentinel-data-connector-reference",
    "product": "Microsoft Sentinel",
    "productSlug": "microsoft-sentinel",
    "month": "Juni",
    "monthKey": "2025-06",
    "date": "Juni 2026",
    "publishedAt": "2025-06-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Consolidated Microsoft Sentinel data connector reference",
    "summary": "We've consolidated the connector reference documentation, merging the separate connector articles into a single, comprehensive reference table. You can find the new connector reference at Microsoft Sentinel data connectors.",
    "url": "https://learn.microsoft.com/en-us/azure/sentinel/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SIEM/SOAR",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SIEM/SOAR"
    ]
  },
  {
    "id": "security-exposure-management-05-enhanced-external-attack-surface-management-integration-with-exposure-management",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced External Attack Surface Management integration with Exposure Management",
    "summary": "This new integration allows you to incorporate detailed external attack surface data from Microsoft Defender External Attack Surface Management (MDEASM) into Exposure Management. This provides a comprehensive risk overview directly within the External Attack Surface initiative page, helping to identify and reduce external exposures more effectively. Additionally, it supports graph exploration, enabling users to analyze relationships between assets and vulnerabilities seamlessly.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-05-enhanced-support-for-device-groups-scoping",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Mai",
    "monthKey": "2025-05",
    "date": "Mai 2026",
    "publishedAt": "2025-05-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Enhanced support for device groups scoping",
    "summary": "The device groups scoping within Exposure Management has been expanded. This update enhances the existing capability to filter the list of affected devices based on your assigned scope by extending it to security metrics and exposed entities in recommendations. With this enhancement, initiative scores, metric progress, security events, and historical insights will now be calculated and displayed according to your specific user scope. As a result, the data presented, including on the Overview page, will be tailored to align with your designated scope. We'll also support the device groups filter, which is already available in Microsoft Defender Vulnerability Management experiences. This filter enables end users to refine their view within their access scope, allowing them to focus on specific devices as needed. Once the filter is adjusted based on the user’s selection, all related data will be refreshed accordingly. Note The device groups scoping capability applies only to data associated with Endpoint devices.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-02-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Februar",
    "monthKey": "2025-02",
    "date": "Februar 2026",
    "publishedAt": "2025-02-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined classification rules were added to the critical assets list: Classification Description Azure Key Vault with high number of operations This rule identifies and classifies Azure Key Vaults that experience a high volume of operations, indicating their criticality within the cloud environment. Security Operations Admin Device This rule applies to critical devices used to configure, manage, and monitor the security within an organization are vital for security operations administration and are at high risk of cyber threats. They require top-level security measures to prevent unauthorized access.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Endpoint",
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "unified-secops-01-unified-threat-intelligence",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Januar",
    "monthKey": "2025-01",
    "date": "Januar 2026",
    "publishedAt": "2025-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Unified threat intelligence",
    "summary": "Microsoft Sentinel-powered threat intelligence has moved in the Defender portal to Intel management, unifying threat intelligence features. In the Azure portal, the location remains unchanged. Along with the new location, the management interface streamlines the creation and curation of threat intel with these key features: Define relationships as you create new STIX objects. Curate existing threat intelligence with the new relationship builder. Create multiple objects quickly by copying common metadata from a new or existing TI object with the duplicate feature. Use advanced search to sort and filter your threat intelligence objects without even writing a Log Analytics query.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Hunting",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Hunting",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "unified-secops-01-soc-optimization-updates-for-unified-coverage-management",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Januar",
    "monthKey": "2025-01",
    "date": "Januar 2026",
    "publishedAt": "2025-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SOC optimization updates for unified coverage management",
    "summary": "In workspaces enabled for unified security operations, SOC optimizations now support both SIEM and XDR data, with detection coverage from across Microsoft Defender services. In the Defender portal, the SOC optimizations and MITRE ATT&CK pages also now provide extra functionality for threat-based coverage optimizations to help you understand the impact of the recommendations on your environment and help you prioritize which to implement first. Enhancements include: Area Details SOC optimizations Overview page - A High, Medium, or Low score for your current detection coverage. This sort of scoring can help you decide which recommendations to prioritize at a glance. - An indication of the number of active Microsoft Defender products (services) out of all available products. This helps you understand whether there's a whole product that you're missing in your environment. Optimization details side pane, shown when you drill down to a specific optimization - Detailed coverage analysis, including the number of user-defined detections, response actions, and products you have active. - Detailed spider charts that show your coverage across different threat categories, for both user-defined and out-of-the-box detections. - An option to jump to the specific threat scenario in the MITRE ATT&CK page instead of viewing MITRE ATT&CK coverage only in the side pane.- An option to View full threat scenario to drill down to even further details about the security products and detections available to provide security coverage in your environment. MITRE ATT&CK page - A new toggle to view coverage by threat scenario. If you've jumped to the MITRE ATT&CK page from either a recommendation details side pane or from the View full threat scenario page, the MITRE ATT&CK page is pre-filtered for your threat scenario. - The technique details pane, shown on the side when you select a specific MITRE ATT&CK technique, now shows the number of active detections out of all available detections for that technique.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "security-exposure-management-01-metrics-enhancements",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Januar",
    "monthKey": "2025-01",
    "date": "Januar 2026",
    "publishedAt": "2025-01-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Metrics enhancements",
    "summary": "The metrics have been enhanced to show the improvement of the exposure levels with a progress bar, progressing from left to right and from 0% (indicating high exposure) to 100% (indicating no exposure). In addition, the metrics weight is now displayed as high, medium, or low, based on the metric's importance to the initiative. The weight can also be defined as risk accepted.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "unified-secops-12-microsoft-sentinel-workbooks-now-available-to-view-directly-in-the-microsoft-defender-portal",
    "product": "Unified SecOps",
    "productSlug": "unified-secops",
    "month": "Desember",
    "monthKey": "2024-12",
    "date": "Desember 2026",
    "publishedAt": "2024-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Microsoft Sentinel workbooks now available to view directly in the Microsoft Defender portal",
    "summary": "Microsoft Sentinel workbooks are now available for viewing directly in the Microsoft Defender portal. Now, in the Defender portal, when you select Microsoft Sentinel > Threat management > Workbooks, you remain in the Defender portal instead of a new tab being opened for workbooks in the Azure portal. Continue tabbing out to the Azure portal only when you need to edit your workbooks. Microsoft Sentinel workbooks are based on Azure Monitor workbooks, and help you visualize and monitor the data ingested to Microsoft Sentinel. Workbooks add tables and charts with analytics for your logs and queries to the tools already available.",
    "url": "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "SecOps Platform",
    "themes": [
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: SecOps Platform"
    ]
  },
  {
    "id": "security-exposure-management-12-new-predefined-classifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "Desember",
    "monthKey": "2024-12",
    "date": "Desember 2026",
    "publishedAt": "2024-12-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "New predefined classifications",
    "summary": "The following predefined classification rules were added to the critical assets list: Classification Description Locked Azure Kubernetes Service cluster This rule applies to Azure Kubernetes Service clusters that are safeguarded by a lock. Premium tier Azure Kubernetes Service cluster This rule applies to premium tier Azure Kubernetes Service clusters. Azure Kubernetes Service cluster with multiple nodes This rule applies to Azure Kubernetes Service clusters with multiple nodes. Azure Arc Kubernetes cluster with multiple nodes This rule applies to Azure Arc clusters with multiple nodes.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Container",
      "Governance",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Container",
      "Governance",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-attack-path-enhancements",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Attack path enhancements",
    "summary": "Hybrid attack paths: On-Prem to Cloud We now support the discovery and visualization of hybrid attack paths that originate from on-premises environments and traverse into cloud infrastructures. We have introduced a new Type column for the attack paths to display the support for hybrid paths that transition between on-premises and cloud environments, or vice versa. This feature equips security teams to: Identify cross-environment attack vectors: See how vulnerabilities in on-prem environments can be leveraged to target assets in the cloud. Prioritize remediation effectively: Gain clarity on the potential risks to critical cloud assets stemming from your hybrid infrastructure. Enhance hybrid defense strategies: Use these insights to strengthen both on-prem and cloud security postures. This capability bridges a critical gap in securing hybrid environments by offering end-to-end visibility into interconnected attack paths. DACL-based path analysis Our attack path calculations now include support for Discretionary Access Control Lists (DACLs), providing a more accurate representation of potential attack paths by incorporating group-based permissions. This enhancement enables defenders to: Make more informed decisions when addressing risks related to permission structures. View risks in the environment the same way attackers do Identify low hanging fruit chokepoints that significantly expose the environment to risk",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Teams",
      "Cloud"
    ],
    "platforms": [
      "Cloud"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Teams",
      "Cloud"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-external-data-connectors",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "External data connectors",
    "summary": "We have introduced new external data connectors to enhance data integration capabilities, allowing seamless ingestion of security data from other security vendors. Data collected through these connectors is normalized within our exposure graph, enhancing your device inventory, mapping relationships, and revealing new attack paths for comprehensive attack surface visibility. These connectors help you to consolidate security posture data from various sources, providing a comprehensive view of your security posture.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-discovery-sources-available-in-the-inventory-and-attack-surface-map",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Discovery sources available in the inventory and attack surface map",
    "summary": "The Device Inventory and Attack Surface Map now display the data sources for each discovered asset. This feature provides an overview of which tools or products reported each asset, including Microsoft and external connectors like Tenable or ServiceNow CMDB. In the inventory, use the Discovery Sources column to filter devices by reporting sources. In the Attack Surface Map, toggle the Discovery Sources view using the Layers option. You can also query Discovery Sources in the Device Info table via Advanced Hunting.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Hunting",
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Hunting",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-ot-security-initiative",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "OT security initiative",
    "summary": "The new OT security initiative equips practitioners with a powerful tool to identify, monitor, and mitigate risks across the OT environment, ensuring both operational reliability and safety. This initiative aims to identify devices across physical sites, assess their associated risks, and provide faster, more effective protection for OT systems.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Endpoint"
    ],
    "platforms": [
      "Endpoint"
    ],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Endpoint"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-content-versioning-notifications",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Content versioning notifications",
    "summary": "The new versioning feature in Microsoft Security Exposure Management offers proactive notifications about upcoming version updates, giving users advanced visibility into anticipated metric changes and their impact on their related initiatives. A dedicated side panel provides comprehensive details about each update, including the expected release date, What's new in Microsoft Security Exposure Management, current and new metric values, and any changes to related initiative scores. Additionally, users can share direct feedback on the updates within the platform, fostering continuous improvement and responsiveness to user needs.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-exposure-history-for-metrics",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "Exposure history for metrics",
    "summary": "User can investigate metric changes by reviewing the asset exposure change details. From the initiative's History tab, by selecting a specific metric, you can now see the list of assets where exposure has been either added or removed, providing clearer insight into exposure shifts over time.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  },
  {
    "id": "security-exposure-management-11-saas-security-initiative",
    "product": "Security Exposure Management",
    "productSlug": "security-exposure-management",
    "month": "November",
    "monthKey": "2024-11",
    "date": "November 2026",
    "publishedAt": "2024-11-01",
    "effectiveAt": null,
    "deadlineAt": null,
    "datePrecision": "month",
    "estimatedDate": true,
    "title": "SaaS security initiative",
    "summary": "The SaaS Security initiative delivers a clear view of your SaaS security coverage, health, configuration, and performance. Through metrics spanning multiple domains, it gives security managers a high-level understanding of their SaaS security posture.",
    "url": "https://learn.microsoft.com/en-us/security-exposure-management/whats-new",
    "releaseStage": "Ikke oppgitt",
    "impact": "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
    "impactLevel": "Lav",
    "sourceType": "whats-new",
    "sourceName": "Microsoft Learn",
    "category": "Exposure Management",
    "themes": [
      "Generelt"
    ],
    "platforms": [],
    "priorityScore": 23,
    "tags": [
      "Ikke oppgitt",
      "Generelt"
    ],
    "analysis": [
      "Lavere påvirkning: mest relevant som kontekst eller planleggingssignal.",
      "Kildetype: Microsoft Learn / whats-new",
      "Kategori: Exposure Management"
    ]
  }
];

export const products = [
  "Microsoft Defender for Cloud",
  "Microsoft Defender for Endpoint",
  "Microsoft Defender for Identity",
  "Microsoft Entra",
  "Microsoft Purview",
  "Microsoft Sentinel",
  "Security Exposure Management",
  "Unified SecOps"
];
export const months = [
  "April",
  "Mars",
  "Februar",
  "November",
  "Juli",
  "Juni",
  "September",
  "Mai",
  "Januar",
  "Desember",
  "Oktober",
  "August"
];
export const releaseStages = [
  "Action required",
  "Deprecation",
  "GA",
  "Preview",
  "Ikke oppgitt"
];
export const sourceTypes = [
  "whats-new",
  "release-notes"
];
export const themes = [
  "AI",
  "Automatisering",
  "Cloud",
  "Container",
  "Endpoint",
  "Generelt",
  "Governance",
  "Hunting",
  "Identitet",
  "Lifecycle",
  "Teams"
];
export const impacts = [
  "Høy",
  "Middels",
  "Lav"
];
