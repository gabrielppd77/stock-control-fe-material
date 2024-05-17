import useMenuStore from "../../store/useMenuStore";

export default function Home() {
  const { toggleOpen } = useMenuStore();

  return (
    <div>
      <button
        style={{ backgroundColor: "red", width: 300, height: 300 }}
        onClick={() => toggleOpen()}
      >
        here
      </button>
    </div>
  );
}
