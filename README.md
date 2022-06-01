Add a client - name, email, phone

- A client can have more than one number
- A client can have more than one email

Add a bill - client, amount, description, date

- Editing a bill will show up as an edit -- i.e adding an edit to a bill maybe editing the desciption

- Bills can be marked as paid in which case the debt will be removed from the client

Add/Edit/Remove a bill

Add/Edit a client

# Models (Tables)

## Bill Model

- Client (foreign key)
- Amount (Number)
- Description (Text) -- What was the order about
- Date Issued (DateTime) -- default value now()
- Date Paid (DateTime) -- will be populated once Paid is _true_
- Paid (Boolean) -- if not paid it is 'pending'

---

## Client Model

- Name (String)
- Phone (String)
- Email (String)
- Address (String)
  - Street Number (String)
  - City (String)
  - Building (String)
  - Floor (String)
- Banned (Boolean) -- default is 0
- Warnings (foreign key)

---

## Warning Model

- Client (foreign key)
- Description (String)

---

## Global Setting Model (Only for **Admins**)

- Allow Registration by other people (Boolean)

---

## User Setting Model

- Client (foreign key)
- Automatic Ban (Boolean)
- Number of warnings (Number)

---

## User Model

- Name (String)
- Email (String)
- Phone (String)
- isAdmin (Boolean)

# Features

- Get all the bills of a client beginning with the last one
- Search for a client
- Ban a client -- in case they never pay (include reason)
- Edit a bill, should show up as an addition to the bill
- Filter bills by date, amount
- Login/Signup (later on)
- Mark bills as paid or leave them pending
- If _automatic ban_ is true and _number of warnings_ is exceeded mark client as **banned**
- Allow/Disallow registration based on the setting
- Only the admin (myself) is capable of changing the _allow registration_ setting, the other settings are specific to users
- Email Verification
- Password Recovery
-
