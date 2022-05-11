import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #4853C2;
height: 397px;
& .columnLeft {
  float: left;
  width: 671px;
  background: rgb(84,101,255);
  background: linear-gradient(126deg, rgba(84,101,255,1) 0%, rgba(182,84,239,1) 100%);
  margin-top: 24px;
  margin-left:275px;
  margin-right:24px;
  height: 349px;
}

& .leftCol {
  width: 330px;
  height: 125px;
  margin-top: 30px;
  margin-left:50px;
  color: white;
}

& .rightCol {
  width: 250px;
  height: 240px;
  margin-top: -130px;
  margin-left:400px;
  margin-right:0px;
}

& img {
 float: right;
  width: 100%;
  height: auto;
}

& h3 {
    text-decoration:underline;
}


& .columnRight {
  float: left;
  width: 671px;
  background: rgb(84,101,255);
  background: linear-gradient(126deg, rgba(84,101,255,1) 0%, rgba(182,84,239,1) 100%);
  margin-top: 24px;
  margin-left:0px;
  margin-right:24px;
  height: 349px;
}

/* Clear floats after the columns */
& .row:after {
  content: "";
  display: table;
  clear: both;
}


`;
