import { Book } from "./types/Book";

// Exempelbok
const firstBook: Book = {
  title: "Rosens Namn",
  currentPage: 90,
  totalPages: 600,
  completed: false,
};

function checkProgress(book: Book): string {
  console.log("Title: " + book.title);
  const progress = calculateProgress(book);
  console.log("Progress: " + progress);
  return progress;
}

function calculateProgress(book: Book): string {
  // Beräknar procent med två decimaler
  const progress: string =
    ((book.currentPage / book.totalPages) * 100).toFixed(2) + "%";
  return progress;
}

// EventListener för knappen
const updateButton = document.getElementById("update");
if (updateButton) {
  updateButton.addEventListener("click", () => {
    const currentPageInput = document.getElementById(
      "currentPage"
    ) as HTMLInputElement;
    const totalPagesInput = document.getElementById(
      "totalPages"
    ) as HTMLInputElement;
    const outputDiv = document.getElementById("output");

    if (currentPageInput && totalPagesInput && outputDiv) {
      const currentPage = Number(currentPageInput.value);
      const totalPages = Number(totalPagesInput.value);

      if (isNaN(currentPage) || isNaN(totalPages) || totalPages === 0) {
        outputDiv.innerText = "Var god skriv in giltiga nummer!";
      } else {
        const userBook: Book = {
          title: firstBook.title, // Använder samma titel som firstBook, men du kan låta användaren ändra den om du vill
          currentPage: currentPage,
          totalPages: totalPages,
          completed: currentPage >= totalPages,
        };

        const progress = checkProgress(userBook);
        outputDiv.innerText = `Titel: ${userBook.title}\nProgress: ${progress}`;
      }
    }
  });
}

// Valfritt: Visa initial progress för firstBook vid sidladdning
const initialOutput = document.getElementById("output");
if (initialOutput) {
  const progress = checkProgress(firstBook);
  initialOutput.innerText = `Titel: ${firstBook.title}\nProgress: ${progress}`;
}
