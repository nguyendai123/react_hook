import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  const today = moment().startOf("day").subtract(90, "days").toISOString(true);

  const priorDate = moment()
    .startOf("day")
    .subtract(121, "days")
    .toISOString(true);
  const { data: dataCovid, isLoading, isError } =
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch(
      `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
      // `https://jsonplaceholder.typicode.com/posts`,
      true
    );

  return (
    <>
      <h3>Covid 19 tracking in VietNam:</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}

          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                {" "}
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                {" "}
                Something wrong...{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <>
        <h3>table:</h3>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {isError === false &&
              isLoading === false &&
              dataApi &&
              dataApi.length > 0 &&
              dataApi.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                );
              })}

            {isLoading === true && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  {" "}
                  Loading...
                </td>
              </tr>
            )}

            {isError === true && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  {" "}
                  Something wrong...{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </> */}
    </>
  );
};

export default Covid;
