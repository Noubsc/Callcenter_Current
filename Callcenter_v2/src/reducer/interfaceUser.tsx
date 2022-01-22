import { DateRangeValidationError } from "@mui/lab/internal/pickers/date-utils"


interface signature {

  id : number
  uuid : string
  signature: string
  hashMe : string
  service : string
  otp : Array<{}>
  createdAt : Date
  updatedAt : Date




}



interface UserObject {
    id : number 
    name : string
    username : string
    uuid : string
    phonenumber : string
    photo : string
    isActive : boolean
    createdAt : Date
    updatedAt : Date

  }

 
  interface root {
    userData :roots
  }


  


  interface roots{

    user : UserObject
    token : string
    signature : signature
  }


export default root;