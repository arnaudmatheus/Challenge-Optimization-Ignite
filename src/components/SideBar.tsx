import { memo } from "react";
import Button from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => buttonClickCallback(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export default memo(SideBar, (prevProps, nextProps) => {
  return Object.is(prevProps.genres, nextProps.genres);
});
