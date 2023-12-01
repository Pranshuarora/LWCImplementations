# import os
# import subprocess

# BUILD_NUMBER = os.environ.get('BUILD_NUMBER', 'default_build_number')
# SFDC_USERNAME = None  # You can set this variable if needed

# HUB_ORG = os.environ.get('HUB_ORG_DH', 'pranshu@softude.com')
# SFDC_HOST = os.environ.get('SFDC_HOST_DH', 'https://login.salesforce.com')
# CONNECTED_APP_CONSUMER_KEY = os.environ.get('CONNECTED_APP_CONSUMER_KEY_DH', '3MVG9n_HvETGhr3AcyQqIh_BguNyokLEWUIDMSK4rR0teNcX8eLMO4IIkPdclTQCEakC5TdBk0rSzawgALc4o')

# print('KEY IS')
# print(os.environ['JWT_KEY_FILE'])  # Use the environment variable directly

# toolbelt = r'C:\\Program Files\\sfdx\\bin\\sfdx.cmd'


# # Checkout source
# subprocess.run(['git', 'checkout', 'HEAD'])

# # Deploy Code
# with open(os.environ['JWT_KEY_FILE'], 'rb') as jwt_key_file:
#     cmd_auth = [
#         toolbelt,
#         'force:auth:jwt:grant',
#         '--client-id', CONNECTED_APP_CONSUMER_KEY,
#         '--username', HUB_ORG,
#         '--jwt-key-file', jwt_key_file.name,
#         '--set-default-dev-hub',
#         '--instance-url', SFDC_HOST
#     ]

#     rc_auth = subprocess.run(cmd_auth, capture_output=True, text=True)

#     print(f"Authorization Command: {' '.join(cmd_auth)}")
#     print(f"Authorization Output: {rc_auth.stdout}")
#     print(f"Authorization Error: {rc_auth.stderr}")

#     if rc_auth.returncode != 0:
#         raise Exception('Hub org authorization failed')

#     print(rc_auth.stdout)

#     # Specify the path to package.xml directly
#     package_xml_path = 'manifest/package.xml'

#     # Deploy source with manifest
#     cmd_deploy = [
#     toolbelt,
#     'force:source:deploy',
#     '--manifest', package_xml_path,
#     '--target-org', HUB_ORG
#     ]


#     # Check if the OS is Unix-like
#     if os.name == 'posix':
#         rmsg = subprocess.run(cmd_deploy, capture_output=True, text=True)
#     else:
#         # For Windows, use shell=True
#         rmsg = subprocess.run(cmd_deploy, capture_output=True, text=True, shell=True)

# print(f"For deployment: {rmsg}")

import os
import subprocess

BUILD_NUMBER = os.environ.get('BUILD_NUMBER', 'default_build_number')
SFDC_USERNAME = None  # You can set this variable if needed

HUB_ORG = os.environ.get('HUB_ORG_DH')
SFDC_HOST = os.environ.get('SFDC_HOST_DH')
CONNECTED_APP_CONSUMER_KEY = os.environ.get('CONNECTED_APP_CONSUMER_KEY_DH')


print('KEY IS')
print(HUB_ORG)
print(SFDC_HOST)
print(CONNECTED_APP_CONSUMER_KEY)
print(os.environ['JWT_KEY_FILE'])  # Use the environment variable directly

toolbelt = r'C:\\Program Files\\sfdx\\bin\\sfdx.cmd'


# Checkout source
subprocess.run(['git', 'checkout', 'HEAD'])

# Deploy Code
with open(os.environ['JWT_KEY_FILE'], 'rb') as jwt_key_file:
    cmd_auth = [
        toolbelt,
        'force:auth:jwt:grant',
        '--client-id', CONNECTED_APP_CONSUMER_KEY,
        '--username', HUB_ORG,
        '--jwt-key-file', jwt_key_file.name,
        '--set-default-dev-hub',
        '--instance-url', SFDC_HOST
    ]

    rc_auth = subprocess.run(cmd_auth, capture_output=True, text=True)

    print(f"Authorization Command: {' '.join(cmd_auth)}")
    print(f"Authorization Output: {rc_auth.stdout}")
    print(f"Authorization Error: {rc_auth.stderr}")

    if rc_auth.returncode != 0:
        raise Exception('Hub org authorization failed')

    print(rc_auth.stdout)

    # Specify the path to package.xml directly
    package_xml_path = 'manifest/package.xml'

    # Deploy source with manifest
    cmd_deploy = [
    toolbelt,
    'force:source:deploy',
    '--manifest', package_xml_path,
    '--target-org', HUB_ORG
    ]


    # Check if the OS is Unix-like
    if os.name == 'posix':
        rmsg = subprocess.run(cmd_deploy, capture_output=True, text=True)
    else:
        # For Windows, use shell=True
        rmsg = subprocess.run(cmd_deploy, capture_output=True, text=True, shell=True)

print(f"For deployment: {rmsg}")
