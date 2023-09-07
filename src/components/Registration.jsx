import React from 'react'
import {
  useMutation,
} from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import RegistrationForm from './RegistrationForm';
import { registerUser } from '../../server/controllers/server-controller';

const Registration = () => {

  const queryClient = useQueryClient()

  const createUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
  
  const handleAddUser = (user) => {
    createUserMutation.mutate({
      ...user
    })
  }

  return (
    <div>
      <RegistrationForm onSubmit={handleAddUser}/>
    </div>
  )
}

export default Registration
