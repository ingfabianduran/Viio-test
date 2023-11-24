import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormLogin from '../components/FormLogin';

describe('FormLogin', () => {
  test('View component Form Login and validate title form', () => {
    render(
      <BrowserRouter>
        <FormLogin />
      </BrowserRouter>
    );
    expect(screen.getByText('INICIAR SESIÓN')).toBeDefined();
  });
});