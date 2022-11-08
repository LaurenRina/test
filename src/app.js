function generateList(response) {
  let list = document.querySelector("#list");
  let listData = response.data;

  let listHTML = `<div>`;
  listData.forEach(function (jobData) {
    listHTML =
      listHTML +
      `<div class="job-bar">
      <p class="d-block d-md-none updated">Posted <span>${jobData.updatedAt.slice(
        0,
        10
      )}</span></p>
        <div class="row">
          <div class="col-md-10 content">
            <div class="row">
              <div class="col-md-2 logo">
                <img src="${
                  jobData.pictures[
                    Math.floor(Math.random() * jobData.pictures.length)
                  ]
                }" alt="" class="icon" />
              </div>
              <div class="col-md-10 info">
                <h3>
                <a href="details%20.html" target="_blanc" class="d-none d-md-block" id="title-link">${
                  jobData.title
                }</a>
                <a href="details%20.html" class="d-block d-md-none" id="title-link">${jobData.title.slice(
                  0,
                  50
                )}</a>
                </h3>
                <p class="name">${jobData.name}</p>
                <p>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>${jobData.address}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 d-none d-md-block frame">
            <i class="fa-regular fa-bookmark"></i>
            <p class="updated">Posted <span>${jobData.updatedAt.slice(
              0,
              10
            )}</span></p>
          </div>
        </div>
      </div>`;
  });
  listHTML = listHTML + `</div>`;
  if (list && listHTML) list.innerHTML = listHTML;

  let index;
  let titleLinks = document.querySelectorAll("#title-link");
  titleLinks.forEach(function getTitle(titleLink) {
    titleLink.addEventListener("click", function getIndex() {
      index = listData.findIndex((element) => element.title === this.innerHTML);
      return index;
    });
  });
}

function showDetails(response) {
  let job = document.querySelector("#job");
  let jobData = response.data[9];

  let jobDescriptions = jobData.description.split("\n ");
  let jobCompensations = jobDescriptions[5].split("\n\t ");
  let jobCompensation = jobCompensations[1].split(". ");

  let jobPictures = jobData.pictures;
  let picturesHTML = `<div class="d-inline">`;
  jobPictures.forEach(function (jobPicture) {
    picturesHTML =
      picturesHTML + `<img src="${jobPicture}" alt="" class="picture" />`;
  });
  picturesHTML = picturesHTML + `</div>`;

  let jobEmploymentTypes = jobData.employment_type;
  let employmentTypesHTML = `<span>`;
  jobEmploymentTypes.forEach(function (employmentType) {
    employmentTypesHTML =
      employmentTypesHTML +
      `<p class="d-inline-block text-truncate m-1 job-employment">${employmentType}</p>`;
  });
  employmentTypesHTML = employmentTypesHTML + `</span>`;

  let jobBenefits = jobData.benefits;
  let benefitsHTML = `<div>`;
  jobBenefits.forEach(function (benefit) {
    benefitsHTML =
      benefitsHTML +
      `<p class="d-inline-block text-truncate m-1 job-benefits" >${benefit}</p>`;
  });
  benefitsHTML = benefitsHTML + `</div>`;

  let jobHTML = `<div>`;
  jobHTML =
    jobHTML +
    `<div  class="job-details">
            <div class="row">
		          <div class="col-md-8 job-content">
		            <header class="row">
		              <h2 class="col-md-5">Job details</h2>
	                <p class="col-md-7 d-none d-md-block header-right">
	                  <i class="fa-regular fa-bookmark"></i>
	                  <span> Save to my list </span>
	                  <i class="fa-solid fa-share-nodes ms-3"></i><span> Share</span>
	                </p>
	              </header>
	              <hr />
	              <p class="col-md d-block d-md-none">
	                <i class="fa-regular fa-star"></i>
                  <span> Save to my list </span>
                  <i class="fa-solid fa-share-nodes ms-3"></i><span> Share</span>
                </p>
                <button class="d-none d-md-inline button-apply">Apply now</button>
                <div class="row top">
                  <div class="col-md-9 title">
                    <h1>${jobData.title}</h1>
                  </div>
                  <div class="col-md-3 d-none d-md-block">
                    <h3 class="salary">
                      <b>€ <span>${jobData.salary.replace(
                        /k/g,
                        "000"
                      )}</span></b>
                    </h3>
                    <p>Brutto, per year</p>
                  </div>
                  <div class="row">
                    <p class="col d-md-block light-text">
                      Posted <span>${jobData.updatedAt.slice(0, 10)}</span>
                    </p>
                    <div class="col d-block d-md-none salary-right">
                      <p class="brutto">Brutto, per year</p>
                      <h3 class="salary">
                        <b>€ <span>${jobData.salary.replace(
                          /k/g,
                          "000"
                        )}</span></b>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="discription">
                  <p>${jobDescriptions[1]}</p>
                  <h3 class="fw-bold">${jobDescriptions[3]}</h3>
                  <p>${jobDescriptions[4]}</p>
                  <h3 class="fw-bold" id="job-description4">${
                    jobCompensations[0]
                  }</h3>
                  <ul>
                    <li id="job-description51">${jobCompensation[0]}</li>
                    <li id="job-description52">${jobCompensation[1]}</li>
                    <li id="job-description53">${jobCompensation[2]}</li>
                  </ul>
                </div>
                <button class="d-block d-md-inline button-apply">Apply now</button>
                <h2 class="mt-5">Additional info</h2>
                <hr />
                <div class="additionalInfo">
                  <div>
                    <p>Employment type</p>
                    <div>${employmentTypesHTML}</div>
                  </div>
                  <div>
                    <p>Benefits</p>
                    <div id="job-benefits">${benefitsHTML}</div>
                  </div>
                </div>
                <h2 class="mt-5">Attached images</h2>
                <hr />
                <div>${picturesHTML}</div>
                <div class="d-none d-md-block return">
                  <a href="index.html" class="button-return">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span> RETURN TO JOB BOARD</span>
                  </a>
                </div>
              </div>
              <h2 class="mt-5 d-inline d-md-none">Contacts</h2>
              <hr class="d-inline d-md-none" />
              <div class="col-md-4 map">
                <img
                  src="images/e1f91a7c-b6f3-427f-80ea-560187f4b126.jpeg"
                  alt=""
                  class="job-map"
                />
                <div class="location">
                  <h3>${jobData.name}</h3>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${jobData.address}</span>
                  </p>
                  <div>${jobData.phone}</div>
                  <div>${jobData.email}</div>
                </div>
              </div>
            </div>
	      </div>`;
  jobHTML = jobHTML + `</div>`;
  if (job && jobHTML) job.innerHTML = jobHTML;
}

function getData() {
  let url =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  axios.get(url).then(generateList);
  axios.get(url).then(showDetails);
}
getData();
