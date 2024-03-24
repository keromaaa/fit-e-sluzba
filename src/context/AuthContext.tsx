import React, { useState } from 'react'

export const AuthContext = React.createContext(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null)
}
