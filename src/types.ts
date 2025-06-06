interface IMovies {
  name: string;
  rate: number;
}

class Movies implements IMovies {
  name: string;
  rate: number;

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
      Movies.rendertable(movie);
    }
  }

  static init() {
    const form = document.getElementById("form")!;
    form.addEventListener("submit", Movies.submitForm);
  }

  // render table

  static rendertable(movie: Movies) {
    const trTable = document.getElementById("domTable")!;
    const tdName = document.createElement("td");
    const tdRate = document.createElement("td");
    const tdAct = document.createElement("td");
    const tdActionBtn = document.createElement("button");
    tdAct.appendChild(tdActionBtn);

    tdActionBtn.textContent = "Delete";
    tdActionBtn.className = "bg-red p-4 text-white font-bold";

    tdName.textContent = movie.name;
    tdRate.textContent = movie.rate.toString();

    trTable.appendChild(tdName);
    trTable.appendChild(tdRate);
    trTable.appendChild(tdAct);
  }
}

Movies.init();
