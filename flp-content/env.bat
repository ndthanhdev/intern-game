@echo off

SET VCAP_APPLICATION={"start":"2018-03-21 16:08:54 +0700","application_id":"af3e6c09-f95a-4527-ae81-f0683a808944","instance_id":"af3e6c09-f95a-4527-ae81-f0683a808944","space_id":"dfa20586-7628-48db-8266-53fc23d761eb","application_name":"flp-content","organization_name":"orgname","space_name":"PLG","started_at_timestamp":"1521623334833","started_at":"2018-03-21 16:08:54 +0700","state_timestamp":"1521622727318","full_application_uris":["http://sgnl50846993a.dhcp.sgn.sap.corp:51046"],"application_uris":["sgnl50846993a.dhcp.sgn.sap.corp:51046"],"uris":["sgnl50846993a.dhcp.sgn.sap.corp:51046"],"version":"5af7ff64-6e89-472b-8b5f-d86da7b139e3","application_version":"5af7ff64-6e89-472b-8b5f-d86da7b139e3"}
SET VCAP_SERVICES={"xsuaa":[{"name":"portal-uaa","label":"xsuaa","tags":["xsuaa"],"plan":"space","credentials":{"tenantmode":"dedicated","clientid":"sb-na-bb3eec7d-01d7-4d8f-9470-3426b8c08efb!i7","verificationkey":"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvb+J2CNarZP4KUIQQB5fg4yFP2yVe0qUPpJjwU6Qs+HHinkCwIZ4rdwq6Het/0M8Iqeg9ia1LgnemzdUOIvZg7oicHjxBb4gkcIpxwuPum3+oqRXrgJ4UG0wFFlQNlP+v0Pf7sLuro8NJosvqD4TJ6DSeD+BQCREfZ6MXrnxuOGvKOqBu9VeisWzcfCBKayBDaUKa/hVnRPAmCeT4Pb00ukK/T0/u3UkhEQQ1GpwKsnUYZZZM5g1MV6lGGv3hpEk1Evwbb2G5etkfAydfvOcVH17mmtFO/6J1QJrQJinSApEJzm0JvgtcpelWhn5/YKbwGNSDt0wdc5OgSRMJQ/9HwIDAQAB-----END PUBLIC KEY-----","xsappname":"na-bb3eec7d-01d7-4d8f-9470-3426b8c08efb!i7","identityzone":"uaa","identityzoneid":"uaa","clientsecret":"k6jTMfTXRgyNRXOHrlW50YRGga4CMhZvx3Nz/P/beDOmwJ642f4ZmMpwoN9KjGXEISc+hITNC6iJ\nNDY8X+JpXA==","url":"http://sgnl50846993a.dhcp.sgn.sap.corp:30032/uaa-security"}}],"portal-services":[{"name":"portal-services-content","label":"portal-services","tags":["portal","portal-services"],"plan":"site-content","credentials":{"password":"Mx9HVfpcQYdcMRuhSLp0tb1pZSN8SqOPv0fHcGzouB-B_Nghr3_3s0wh0QMWtylXoH60rDOTdedYYMVxfw7bS96mTKQJDfDsGhgQeRwKYh6rbazF5UR-yTG7TJQmt2i0","instanceId":"4359bf58-8d9a-4a61-95c4-eb4b6ac8e68b","bindingId":"61b5a03f-9216-4e28-acea-c49032fb0ed8","portalStaticResourcesUrl":"http://sgnl50846993a.dhcp.sgn.sap.corp:51085","user":"SBSS_13057003022039651111761476441004373132549117790004382822844110414","url":"http://sgnl50846993a.dhcp.sgn.sap.corp:51084"}}]}
SET DEPLOY_ATTRIBUTES={ ^
  "app-content-digest": "162DF613BD9E24C67F9AA72440C36CF0", ^
  "dependency-type": "soft", ^
  "descriptor-defined-uris": [ ^
    "sgnl50846993a.dhcp.sgn.sap.corp:51046" ^
  ] ^
}
SET MTA_METADATA={ ^
  "id": "com.sap.thanh.intern-game", ^
  "version": "0.0.1" ^
}
SET MTA_MODULE_METADATA={ ^
  "name": "flp-content" ^
}
SET MTA_MODULE_PROVIDED_DEPENDENCIES=[]
SET MTA_SERVICES=[ ^
  "portal-services-content", ^
  "portal-uaa" ^
]
SET MEMORY_LIMIT=1024m
