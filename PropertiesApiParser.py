import requests, json

count = 0;
cursorCount = 0;
aa=[]
while True:
    url = 'https://europewest-api-sandbox.snapshot.technology/v1/dwh/transactional/properties/05076c15-cb52-4b83-b8af-8470f85023f2/reservations?start=2015-01-01&end=2017-12-31&time_filter=created&res_status=cancelled&sort_desc=start&cursor='+str(cursorCount)
    headers = {'Accept': 'application/json', 'Authorization':   'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJQXl5ZUhIX1NLTTZiR21ReWNOMXBkM3hlN2RMVTBZNDBOdU1oQmJiQV9RIn0.eyJqdGkiOiJkYjA4Yjk4Zi0yMjQxLTQ0ZGYtOTM1Ny1kNDZlMmNkZDQzMDIiLCJleHAiOjE1MTcxMDYyMDMsIm5iZiI6MCwiaWF0IjoxNTE3MTA0NDAzLCJpc3MiOiJodHRwczovL2V1cm9wZXdlc3Qtc3NvLXNhbmRib3guc25hcHNob3QudGVjaG5vbG9neS9hdXRoL3JlYWxtcy9TbmFwc2hvdCIsImF1ZCI6IjZmYTU3MDIxLTBjMjYtNDkzMS1iMzdhLTllZWVjYmFjNzUxZiIsInN1YiI6ImY6ZDQyOTAxNDktZDNmOC00ODlkLTg4OTEtNzVlZWE0MzdlNzY1OmQ0NTE4MTMyLWJhYmMtNGQ0OS05MmMzLWZlMzQ5MjRiMDIwMiIsInR5cCI6IkJlYXJlciIsImF6cCI6IjZmYTU3MDIxLTBjMjYtNDkzMS1iMzdhLTllZWVjYmFjNzUxZiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjQxODZiNTljLTAyZDYtNDdkNS04NGQzLTE1YWI5Yzg2Yzc4MCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJpZGVudGl0eV9pZCI6ImQ0NTE4MTMyLWJhYmMtNGQ0OS05MmMzLWZlMzQ5MjRiMDIwMiIsImlzcyI6IlNuYXBzaG90In0.E4_KMS2eIXHw3j_ra8cJk29fMjGVo-vq6Rwoe4xRk5125PhM_Zc7RYbBsi3D5CxD9ezPakRmrDtz36BvUOxJsjGluFDFo23JUS47ptLnMaAMnuhnEiMMqPuqKgKKjf4nrgQwhgnUm7hRL63WlzXTZtwUuexktkWWyywrug1EH0kAHV3kFEuZTjoaJbatyAQmoOi52hwXgPtze989VlOqM-Iwv2QmtgpbY88PmQVJ3ps2p4DXlbIOuAj5nUgF14ui4cuk4KAW50rsJljJPYvYWoAO6qfdqVSZyfiF8fsxBoUqeUFk9jYz94u2IcGv1uiZsvlvZV2592dp7cfxSPXYaA' }
    r = requests.get(url, headers=headers)
    print(len(r.json()[0]['reservations']))
    for reserv in r.json()[0]['reservations']:
        date1 = datetime.datetime.strptime(str(reserv['start']), "%Y-%m-%d")
        obj={}
        for unit in reserv['number_of_units'] :      
            addDays = relativedelta(days=1)
            date1 = date1 + addDays
            obj['date'] = str(date1)
            obj['unit'] = str(unit)
            obj['reservation_id'] = reserv['reservation_id']
            aa.append(obj)
    count = count +1
    if(len(r.json()[0]['reservations'])<200):
        break;
    else:
        cursorCount = cursorCount +200;
print(aa)
