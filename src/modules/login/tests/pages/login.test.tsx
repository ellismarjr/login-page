import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import { Login } from "../../pages/login";

describe('Login Page', () => {
  it('should be able to render correctly', () => {
    render(<Login />);

    const emailInputLabel = screen.getByText('Email');
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInputLabel = screen.getByText('Senha');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const accessButton = screen.getByText(/acessar/i);

    expect(emailInputLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInputLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(accessButton).toBeInTheDocument();
  });
})