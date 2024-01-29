import Modal from "../Modal";

const ProgramsDialog = ({ showProgramsDialog, close }) => {
  return (
    <Modal isOpen={showProgramsDialog} showClose={true} handleClose={() => close()} title="Programs">
      <div id="programs-dialog">
        <p>
          Village Roots Collective is a developmentally appropriate program with a cooperative philosophy, providing a
          learning environment for both parents and children. We believe that each child is unique and has the right to
          learn at their own pace. We suit the needs of each child and learning style through our Reggio, Montessori,
          nature and play-based inspired environment. Offering a rich environment with endless possibilities creates
          opportunities for children to learn through material and human interaction. The role of the teacher is to be a
          facilitator, create an inviting environment that encourages play and exploration all while helping the children
          develop a sense of pride and respect in themselves.
        </p>
        <p>
          We currently offer a program for children ages 3-5. Class begins at 10:00 AM and ends at 2:00 PM - Mondays
          through Thursdays.
        </p>
        <p>We&apos;re working on more programs for different age groups. Check back soon!</p>
      </div>
    </Modal>
  );
};

export default ProgramsDialog;
