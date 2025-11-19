import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Login from './login'

it('should render page with required fields', () => {
     render(<Login />)

     expect(screen.getByText(/Sign In/)).toBeInTheDocument()
     expect(screen.getByText(/Forgot Password?/)).toBeInTheDocument()
     expect(screen.getByPlaceholderText("username")).toBeInTheDocument()
     expect(screen.getByPlaceholderText("password")).toBeInTheDocument()
     expect(screen.getByRole('checkbox')).toBeInTheDocument()
     expect(screen.getByRole('button',{name:"Log In"})).toBeInTheDocument()
})

