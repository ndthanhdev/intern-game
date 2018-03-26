@echo off

SET VCAP_APPLICATION={"start":"2018-03-03 20:30:57 +0700","application_id":"793e1b05-716d-44b3-9afb-37a8332cb3ba","instance_id":"793e1b05-716d-44b3-9afb-37a8332cb3ba","space_id":"8ebccc8b-beaf-40df-acdb-774bddd5f77c","application_name":"web","organization_name":"dev","space_name":"DEV","started_at_timestamp":"1520083857082","started_at":"2018-03-03 20:30:57 +0700","state_timestamp":"1520083437063","full_application_uris":["http://sgnl50846993a.dhcp.sgn.sap.corp:51032"],"application_uris":["sgnl50846993a.dhcp.sgn.sap.corp:51032"],"uris":["sgnl50846993a.dhcp.sgn.sap.corp:51032"],"version":"55d77256-52b9-49d6-a8da-9a6ee2b5ebca","application_version":"55d77256-52b9-49d6-a8da-9a6ee2b5ebca"}
SET VCAP_SERVICES={}
SET destinations=[ ^
    { ^
        "name":"backend",  ^
        "url":"http://sgnl50846993a.dhcp.sgn.sap.corp:51033",  ^
        "forwardAuthToken": true  ^
    } ^
]
SET MEMORY_LIMIT=1024m
