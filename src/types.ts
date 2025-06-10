interface IMovies {
  name: string;
  rate: number;
}

class Movies implements IMovies {
  public name: string;
  public rate: number;
  static idCounter: number = 0;
  constructor(name: string, rate: number) {
    this.name = name;
    this.rate = rate;
  }

  //get input value form

  static getInputValues(): Movies | null {
    const movieNameInp = document.getElementById(
      "movieInput"
    ) as HTMLInputElement;
    const movieRateInp = document.getElementById(
      "rateInput"
    ) as HTMLInputElement;

    if (movieNameInp.value && movieRateInp.value) {
      return new Movies(movieNameInp.value, +movieRateInp.value);
    }

    return null;
  }

  static submitForm(event: Event) {
    event.preventDefault();
    const movie = Movies.getInputValues();
    if (movie) {
      console.log(movie);
      Movies.createTableContect(movie);
    }
  }

  // render table

  static createTableContect(movie: Movies) {
    const tableBody = document.getElementById("domTable")!;

    const rowId = `row-${Movies.idCounter}`;

    const tr = document.createElement("tr");

    tr.setAttribute("id", rowId);

    const tdName = document.createElement("td");
    tdName.className = "bg-blue-100 border-2 border-blue-500";
    tdName.textContent = movie.name;

    const tdRate = document.createElement("td");
    tdRate.className = "bg-blue-100 border-2 border-blue-500";
    tdRate.textContent = movie.rate.toString();

    const tdAct = document.createElement("td");
    tdAct.className = "bg-blue-100 border-2 border-blue-500 mx-auto";
    const tdActionBtn = document.createElement("button");

    tdActionBtn.textContent = "Delete";
    tdActionBtn.className =
      "bg-red-500 rounded-lg cursor-pointer p-2 text-white font-bold";

    tdActionBtn.dataset.id = rowId;

    tdActionBtn.addEventListener("click", () => {
      const row = document.getElementById(tdActionBtn.dataset.id!)!;
      row.remove();
    });

    tdAct.appendChild(tdActionBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdRate);
    tr.appendChild(tdAct);

    tableBody.appendChild(tr);

    Movies.idCounter++;
  }
  static init() {
    const form = document.getElementById("form")!;
    form.addEventListener("submit", Movies.submitForm);
  }
}

Movies.init();
