@echo off

SET VCAP_APPLICATION={"start":"2018-04-07 00:18:45 +0700","application_id":"d4ec5e51-3e8e-4749-b698-c7c98329ba90","instance_id":"d4ec5e51-3e8e-4749-b698-c7c98329ba90","space_id":"28cd7bc2-0138-46a2-be13-818a6b47db38","application_name":"ig-todo-js","organization_name":"orgname","space_name":"PLG","started_at_timestamp":"1523035125110","started_at":"2018-04-07 00:18:45 +0700","state_timestamp":"1523001507681","full_application_uris":["https://sgnl50846993a.dhcp.sgn.sap.corp:51052"],"application_uris":["sgnl50846993a.dhcp.sgn.sap.corp:51052"],"uris":["sgnl50846993a.dhcp.sgn.sap.corp:51052"],"version":"8a3781c4-1197-47bf-a362-544cb6a5c6c9","application_version":"8a3781c4-1197-47bf-a362-544cb6a5c6c9"}
SET VCAP_SERVICES={"xsuaa":[{"name":"inter-game-uaa","label":"xsuaa","tags":["xsuaa"],"plan":"space","credentials":{"tenantmode":"dedicated","clientid":"sb-na-95e74074-097c-4e84-92ea-c0f260bb8083!i3","verificationkey":"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApSss8UYHCnCtmNANequSCJv/A21cLRaCY0qoA3UpR/3B2QQ/M61jjz+voVPbJMSpZ+45wajLiPMZpcPgZOMeEcrNF/zKJP8OZDNFqsfGPXvFECN0fGsxXqfziUa3mva2EI3ZQ261/urF4HtkTz9FcBtx1DO9XjwlWnFFAIWSDi+pMFykuv/vaLi7VqrbcZJfVz1EfSq4tCIXReM/v2H3L4WognHJKNkd8fm5Da2BoTq313f1FBoq73GFV2UmU0N8lIZJPhXLkdMIy3LUwbNfUKfv7Jr691F7iRpf926FIAXEdEO0i8/3iuNjb7wUw6fFX8CGjMdVIjlUQPRCYXTssQIDAQAB-----END PUBLIC KEY-----","xsappname":"na-95e74074-097c-4e84-92ea-c0f260bb8083!i3","identityzone":"uaa","identityzoneid":"uaa","clientsecret":"hcGL1gQznr3KR+NafImHzwcHPZIzekrZL7CXLxzftMkEW0QcqQYJfBkEC9A2w6yr4GT4ejPjq1r/\ndIX9iMxtyA==","url":"https://sgnl50846993a.dhcp.sgn.sap.corp:30032/uaa-security"}}]}
SET DEPLOY_ATTRIBUTES={ ^
  "app-content-digest": "DFE8E5A4DE3F8024E9A257D91DE4539F", ^
  "dependency-type": "soft", ^
  "descriptor-defined-uris": [ ^
    "sgnl50846993a.dhcp.sgn.sap.corp:51052" ^
  ] ^
}
SET MTA_METADATA={ ^
  "id": "com.sap.thanh.intern-game", ^
  "version": "0.0.1" ^
}
SET MTA_MODULE_METADATA={ ^
  "name": "ig-todo-js" ^
}
SET MTA_MODULE_PROVIDED_DEPENDENCIES=[ ^
  "backend", ^
  "ig-todo-js" ^
]
SET MTA_SERVICES=[ ^
  "inter-game-uaa" ^
]
SET MEMORY_LIMIT=1024m
