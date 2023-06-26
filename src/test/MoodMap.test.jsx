import MoodMap from "../pages/MoodMap";
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import test from 'jest';

    // Tests that all components render without crashing
    it('test_render_components', () => {
        render(<MoodMap />);
        expect(screen.getByText('My Week')).toBeInTheDocument();
        expect(screen.getByText('😊')).toBeInTheDocument();
        expect(screen.getByText('🙁')).toBeInTheDocument();
        expect(screen.getByText('🙃')).toBeInTheDocument();
        expect(screen.getByText('😐')).toBeInTheDocument();
        expect(screen.getByText('😢')).toBeInTheDocument();
        expect(screen.getByText('😁')).toBeInTheDocument();
        expect(screen.getByText('😍')).toBeInTheDocument();
        expect(screen.getByText('Word of The Day')).toBeInTheDocument();
        expect(screen.getByText(/"/)).toBeInTheDocument();
    });
