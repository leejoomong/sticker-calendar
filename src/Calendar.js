import { useEffect, useState } from "react";
import "./App.css";
import { Container, Table, Grid, Icon } from "semantic-ui-react";

function Calendar(props) {
  const now = new Date();
  const year = now.getFullYear();
  // January is 0
  const month = now.getMonth();
  const date = now.getDate();
  const monthToText = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const dayToText = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const [thisMonth, setThisMonth] = useState(1);

  useEffect(() => {
    setThisMonth(month);
    // makeCalendar(year, month, day)
  }, [year, month]);

  const getDatesInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const makeDateArray = (year, month) => {
    let dateArray = [];
    let date = 1;
    const numOfDays = getDatesInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    for (let _ of new Array(firstDay)) {
      dateArray.push(0);
    }
    for (let _ of new Array(numOfDays)) {
      dateArray.push(date++);
    }
    return dateArray;
  };

  const makeCalendar = (year, month, date) => {
    const numOfDays = getDatesInMonth(year, month);
    const numOfRows = parseInt(numOfDays / 7 + 1);
    const dateArray = makeDateArray(year, month);

    let headerCells = Object.values(dayToText).map((day, idx) => {
      let color = idx === 0 ? "#FF7473" : idx === 6 ? "#47B8E0" : "#34314C";
      return (
        <Table.Cell key={idx}>
          <b style={{ color: color }}>{day}</b>
        </Table.Cell>
      );
    });

    let contentsCell = (content, color = "#34314C") => {
      if (content === 0 || !content) {
        return <Table.Cell key={content}></Table.Cell>;
      } else {
        return (
          <Table.Cell key={content}>
            <Grid>
              <Grid.Row style={{ padding: 0, margin: 0 }}>
                <Grid.Column
                  style={{ padding: 0, margin: 0, background: "#F8F8F8" }}
                >
                  <font color={color}>{content}</font>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column style={{ cursor: "pointer" }}>
                  <Icon name="heart" size="big" style={{ color: "#FFC952" }} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Table.Cell>
        );
      }
    };

    let row = (week) => {
      return (
        <Table.Row>
          {contentsCell(week[0], "#FF7473")}
          {contentsCell(week[1])}
          {contentsCell(week[2])}
          {contentsCell(week[3])}
          {contentsCell(week[4])}
          {contentsCell(week[5])}
          {contentsCell(week[6], "#47B8E0")}
        </Table.Row>
      );
    };

    let rows = (dateArray) => {
      let weeks = new Array(numOfRows).fill(0).map((_, idx) => {
        return row(dateArray.slice(idx * 7, idx * 7 + 7));
      });
      return weeks;
    };

    return (
      <Table celled textAlign="center">
        <Table.Header width="5%">
          <Table.Row>{headerCells}</Table.Row>
        </Table.Header>
        <Table.Body width="5%">{rows(dateArray)}</Table.Body>
      </Table>
    );
  };

  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <Container>
          <h3 style={{ color: "#34314C", letterSpacing: "3px", margin: 0 }}>
            {monthToText[thisMonth].toUpperCase()}
          </h3>
          <font size={2} style={{ fontStyle: "oblique" }}>
            {props.title}
          </font>
        </Container>
      </header>
      <body className="Calendar-body">
        <Container width="80%"> {makeCalendar(year, month, date)} </Container>
      </body>
    </div>
  );
}

export default Calendar;
