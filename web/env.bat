@echo off

SET VCAP_APPLICATION={"start":"2018-02-27 15:19:45 +0700","application_id":"854eb82f-141b-43b3-8a82-dfceb7437c9e","instance_id":"854eb82f-141b-43b3-8a82-dfceb7437c9e","space_id":"e21af2f9-1a09-4c7d-9699-0831c515fac4","application_name":"shell-web","organization_name":"dev","space_name":"DEV","started_at_timestamp":"1519719585637","started_at":"2018-02-27 15:19:45 +0700","state_timestamp":"1519719440692","full_application_uris":["https://sgnl50846993a.dhcp.sgn.sap.corp:51061"],"application_uris":["sgnl50846993a.dhcp.sgn.sap.corp:51061"],"uris":["sgnl50846993a.dhcp.sgn.sap.corp:51061"],"version":"57a23773-709f-498c-9e54-470f5757ff74","application_version":"57a23773-709f-498c-9e54-470f5757ff74"}
SET VCAP_SERVICES={}
SET destinations=[ ^
    { ^
        "name":"backend",  ^
        "url":"http://localhost:3000",  ^
        "forwardAuthToken": true,  ^
        "strictSSL": false  ^
    } ^
]
SET MEMORY_LIMIT=1024m

