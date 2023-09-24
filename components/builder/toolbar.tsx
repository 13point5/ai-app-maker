import { Button } from "@/components/ui/button";

export const Toolbar = () => {
  return (
    <div className="relative h-full">
      <div className="rounded-md p-2 border-2 flex flex-col gap-2 w-fit h-fit absolute m-auto top-0 bottom-0 left-4">
        <Button size="icon" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M13 6V21H11V6H5V4H19V6H13Z"></path>
          </svg>
        </Button>

        <Button size="icon" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9.86885 15L9.04918 17H6.83333L11 7H13L17.1667 17H14.9508L14.1311 15H9.86885ZM10.6885 13H13.3115L12 9.8L10.6885 13Z"></path>
          </svg>
        </Button>

        <Button size="icon" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M4 5V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V9H20V5H4ZM19.7071 11.2929L19 10.5858L18.2929 11.2929L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L19.7071 11.2929ZM16.7071 17.2929L19 19.5858L21.2929 17.2929L22.7071 18.7071L19.7071 21.7071L19 22.4142L18.2929 21.7071L15.2929 18.7071L16.7071 17.2929Z"></path>
          </svg>
        </Button>

        <Button size="icon" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
