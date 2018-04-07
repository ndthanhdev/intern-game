@echo off

SET VCAP_APPLICATION={"start":"2018-03-28 14:55:06 +0700","application_id":"4dae77bd-c2e1-47e0-b5de-c9f2588ed854","instance_id":"4dae77bd-c2e1-47e0-b5de-c9f2588ed854","space_id":"14d5c368-2914-406c-8120-270730b7cf16","application_name":"ig-flp","organization_name":"orgname","space_name":"PLG","started_at_timestamp":"1522223706313","started_at":"2018-03-28 14:55:06 +0700","state_timestamp":"1522216113394","full_application_uris":["http://sgnl50846993a.dhcp.sgn.sap.corp:51096"],"application_uris":["sgnl50846993a.dhcp.sgn.sap.corp:51096"],"uris":["sgnl50846993a.dhcp.sgn.sap.corp:51096"],"version":"0de56312-4ead-4ae2-9777-8ea586be944a","application_version":"0de56312-4ead-4ae2-9777-8ea586be944a"}
SET VCAP_SERVICES={"xsuaa":[{"name":"inter-game-uaa","label":"xsuaa","tags":["xsuaa"],"plan":"space","credentials":{"tenantmode":"dedicated","clientid":"sb-na-6a675e36-2a14-4743-82f1-ed6ac475faae!i2","verificationkey":"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1oueUZ5gZ+7fXWlBlFo/HTtdIRu04T/Z7GiKcXrD0ZQvB2e+DvTPpqoqOZSWQNOu80RglalajD0dDolUseIm9bE8GeCENZdoH9dOMpTB7BNRvCWxImmZsdy69+WKAzliBXtLwQQc2puxOqEM0T0bmq3GZZQKe+Y/N8ZfL08fimVI8gJybZYq6U8ID0NoxYyOoW0gU9F/SvGzEGqTECv5RyTc5ujfbVl/FUen7uR0OH9SHcgYAxLl7Wq2OaM4NbRXGCWBnTRFzcoxPIqNLZ/sRmjPBZFbaVl6GBmZ7/KtqkQbxvNvqXU72QfOi7hle+k8+xLrVIwi3WJLITqtujlcRQIDAQAB-----END PUBLIC KEY-----","xsappname":"na-6a675e36-2a14-4743-82f1-ed6ac475faae!i2","identityzone":"uaa","identityzoneid":"uaa","clientsecret":"Wg2M6VZO74Eky7ZKnNXCVq1HWWpteDIzzlgF8pQ9eepebvQPpmOb8O308p0cQOgaVru8szBIv878\nzjui07VxBw==","url":"http://sgnl50846993a.dhcp.sgn.sap.corp:30032/uaa-security"}}],"portal-services":[{"name":"sap-portal-services-host-intern-game","label":"portal-services","tags":["portal","portal-services"],"plan":"site-host","credentials":{"password":"Hs603j9FOgl1s9v1N2Mum9ab13npiCoOLLaphYdPYI_LcphLIsFZzne4FC50BpR1L8yjYbOASOy6k0gj31URpagivyin.sikwKOABtoukBmHekJjkVuBOX-mNzPTt9fd","instanceId":"f9723a1f-fee8-456e-954f-f3448f5f28be","bindingId":"817dd0de-38ba-499c-a982-587909d57221","portalStaticResourcesUrl":"http://sgnl50846993a.dhcp.sgn.sap.corp:51023","user":"SBSS_84250762413714647241962530622831553426979599341210551173527097042","url":"http://sgnl50846993a.dhcp.sgn.sap.corp:51022"}}]}
SET DEPLOY_ATTRIBUTES={ ^
  "app-content-digest": "BEB306BBE74A77F7B0E428642CD9EA5E", ^
  "dependency-type": "soft", ^
  "descriptor-defined-uris": [ ^
    "sgnl50846993a.dhcp.sgn.sap.corp:51096" ^
  ] ^
}
SET MTA_METADATA={ ^
  "id": "com.sap.thanh.intern-game", ^
  "version": "0.0.1" ^
}
SET MTA_MODULE_METADATA={ ^
  "name": "ig-flp" ^
}
SET MTA_MODULE_PROVIDED_DEPENDENCIES=[ ^
  "ig-flp" ^
]
SET MTA_SERVICES=[ ^
  "sap-portal-services-host-intern-game", ^
  "inter-game-uaa" ^
]
SET destinations=[ ^
  { ^
    "forwardAuthToken": true, ^
    "name": "todo", ^
    "url": "http://sgnl50846993a.dhcp.sgn.sap.corp:51095" ^
  } ^
]
SET sapui5url=http://sgnl50846993a.dhcp.sgn.sap.corp:51030
SET MEMORY_LIMIT=1024m
