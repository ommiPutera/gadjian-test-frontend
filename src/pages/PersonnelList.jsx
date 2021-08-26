import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPersonnel from "../components/CardPersonnel";
import CardPersonnelLoading from "../components/CardPersonnelLoading";
import ButtonNextAndPrev from "../components/ButtonNextAndPrev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style/personnel-list.css";

const PersonnelList = (props) => {
  const [disableBtnNext, setDisableBtnNext] = useState(false);
  const [disableBtnPrev, setDisableBtnPrev] = useState(false);
  const [fadeNext, setFadeNext] = useState(false);
  const [fadePrev, setFadePrev] = useState(false);
  const [data, setData] = useState([]);
  const [dataLoading] = useState(Array(4).fill(""));

  const fetchApi = async () => {
    const dataArr = [];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (let i = 0; i < 8; i++) {
      // fetch the random data
      const url = `https://randomuser.me/api/?result=28`;
      const res = await fetch(url);
      const data = await res.json();
      const result = data.results[0];

      // initialization variable
      let name = `${result.name.first} ${result.name.last}`;
      let pic = `${result.picture.large}`;
      let id = `${i}${result.login.uuid.replace(/[^0-9]/g, "").slice(0, 4)}`;
      let splitDate = result.dob.date.split("-");
      let year = splitDate[0];
      let month = splitDate[1];
      let day = splitDate[2].slice(0, 2);

      // initialization birth and looping month
      for (let i = 0; i < months.length; i++) {
        if (month === i) {
          month = months[i - 1];
        }
      }
      let birth = `${day} ${month} ${year}`;

      // destructering object
      let dataObj = {
        name: name,
        email: result.email,
        pic: pic,
        phone: result.phone,
        birth: birth,
        id: id,
      };
      dataArr.push(dataObj);
    }
    setData(dataArr);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const renderCard = (fadeNxt, fadePrv) => {
    return data.map((val, index) => {
      return (
        <div key={index}>
          <CardPersonnel
            fadeNext={fadeNxt}
            fadePrev={fadePrv}
            pic={val.pic}
            birth={val.birth}
            phone={val.phone}
            name={val.name}
            email={val.email}
            id={val.id}
          />
        </div>
      );
    });
  };
  const renderCardLoading = () => {
    return dataLoading.map((val, index) => {
      return (
        <div key={index}>
          <CardPersonnelLoading />
        </div>
      );
    });
  };

  const nextCard = () => {
    let rollArr = [...data];
    let arr = rollArr;
    for (let i = 0; i < 4; i++) {
      arr.push(arr.splice(0, 1)[0]);
    }
    setDisableBtnNext(true);
    setDisableBtnPrev(false);
    setFadePrev(false);
    setFadeNext(true);
    setData(arr);
  };
  const previousCard = () => {
    let rollArr = [...data];
    let arr = rollArr;
    arr.reverse();
    for (let i = 0; i < 4; i++) {
      arr.push(arr.splice(0, 1)[0]);
    }
    arr.reverse();
    setDisableBtnPrev(true);
    setDisableBtnNext(false);
    setFadeNext(false);
    setFadePrev(true);
    setData(arr);
  };

  return (
    <>
      <Header onCliCkBtn={props.onCliCkBtn} />
      <div className="container">
        <div className="personnel-list-container">
          <div className="pl-content">
            <div className="pl-content-1">
              <div>
                <p className="text-1">Personnel List</p>
                <p className="text-2">List of all Personnels</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                <input
                  placeholder="Find Personnels"
                  className="input-find-personnel"
                />
                <button className="button-add-personnels">
                  <span>Add Personnel</span>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="pl-content-2">
              {data.length
                ? renderCard(fadeNext, fadePrev)
                : renderCardLoading()}
            </div>
            <div className="pl-content-3">
              <div className="button-slider-fs">
                <ButtonNextAndPrev
                  move={previousCard}
                  direction={"next"}
                  file={"card"}
                  disable={disableBtnPrev}
                />
                <p className={`prev-text ${disableBtnPrev ? `disable` : ``}`}>
                  previous page
                </p>
              </div>
              <div className="button-slider-fs">
                <p className={`next-text ${disableBtnNext ? `disable` : ``}`}>
                  next page
                </p>
                <ButtonNextAndPrev
                  move={nextCard}
                  direction={"prev"}
                  file={"card"}
                  disable={disableBtnNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonnelList;
