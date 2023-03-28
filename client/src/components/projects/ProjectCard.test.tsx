import { ProjectCard } from "./ProjectCard";
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(vi.importActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

describe('ProjectCard', () => {
  describe("when the correct props are passed", () => {
    beforeEach(() => {
      const project = {
        _id: "123",
        name: "Test",
        description: "This is a description"
      };
  
      render(<ProjectCard project={project} />);
    });
  
    it("should show the name and description of the project", () => {
      expect(screen.getByText(/this is a description/i)).toBeInTheDocument();
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  
    it("should navigate with the correct params", () => {
      fireEvent.click(screen.getByText(/test/i));
      expect(mockedUseNavigate).toBeCalledWith("/projects/123");
    });
  })
});