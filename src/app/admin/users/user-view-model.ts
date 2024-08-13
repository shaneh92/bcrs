/*
======================================
; Title: user-view-model.ts
; Author: Chris Gorham, Shane Hingtgen
; Date Created: 14 September 2023
; Last Updated: 14 September 2023
; Description: This code supports the User View Model (updating a user record)
; Sources Used: Bellevue University WEB-450 GitHub Repository
;=====================================
*/

// export the model
export interface UserViewModel {
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
  role: string
  isDisabled: boolean
}