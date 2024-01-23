export default function NotesLayout(props) {
  console.log(props);
  return (
    <section className="flex gap-[4vw] max-h-[90vh] overflow-scroll">
      <div className="text-center flex w-full flex-col gap-[2vw] py-10">
        <h2 className="text-2xl text-[#3F37C9] font-bold">
          Create a note for your future self.
        </h2>
        {props.children}
      </div>
      <div className="text-center flex w-full flex-col gap-[2vw] py-10">
        <h2 className="text-2xl text-[#3F37C9] font-bold">Saved Notes</h2>
        {props.team}
      </div>
    </section>
  );
}
