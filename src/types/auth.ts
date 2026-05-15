export interface RegisterBody {
    name: string
    email: string
    password: string
  }
  
  export interface LoginBody {
    email: string
    password: string
  }
  
  export interface AuthResponse {
    success: boolean
    data: {
      token: string
      user: {
        id: string
        name: string
        email: string
      }
    }
  }

  export interface RegisterCredentials {
    email: string
    password: string
  }