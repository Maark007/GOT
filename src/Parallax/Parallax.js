import React, { Component } from "react";
import "../SASS/index.scss";

class Parallax extends Component {
  render() {
    return (
      <>
        <div className="image1">
          <h1 className="text1Title">Game of Thrones</h1>
        </div>
        <div>
          <h1 className="text1">Jon Snow</h1>
        </div>
        <div>
          <p className="text2">
            Jon Snow is a fictional character in the A Song of Ice and Fire
            series of fantasy novels by American author George R. R. Martin, and
            its television adaptation Game of Thrones,in which he is portrayed
            by English actor Kit Harington.
          </p>
        </div>
        <div className="image2" />
        <div>
          <h1 className="text3">Tiryon Lannister</h1>
        </div>
        <div>
          <p className="text4">
            Tyrion Lannister, also referred to as "the Imp" or "the Halfman"
            and, while in exile, by the alias Hugor Hill, is a fictional
            character in the A Song of Ice and Fire series of epic fantasy
            novels by American author George R. R. Martin and its television
            adaptation Game of Thrones.
          </p>
        </div>
        <div className="image3" />
        <h1 className="text5">Daenerys Targaryen</h1>
        <div>
          <p className="text6">
            Daenerys Targaryen is a fictional character in George R. R. Martin's
            A Song of Ice and Fire series of novels, as well as the television
            adaptation, Game of Thrones, where she is portrayed by English
            actress Emilia Clarke. In the novels, she is a prominent point of
            view character
          </p>
        </div>
      </>
    );
  }
}

export default Parallax;
