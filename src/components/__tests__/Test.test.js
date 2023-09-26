import { render, screen } from '@testing-library/react';
import Test from '../Test';
  
  test('should renders start test UI', () => {
    render(<Test />);
    const button = screen.getByText('Start Test');
    expect(button).toBeInTheDocument();
  });