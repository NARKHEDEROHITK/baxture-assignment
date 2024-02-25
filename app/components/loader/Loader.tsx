import { Grid } from "@mantine/core";
import "./loader.css";
const Loader = () => {
  return (
    <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
        <div className="card">
                <div className="shimmerBG media"></div>
                <div className="p-32">
                  <div className="shimmerBG title-line"></div>
                  <div className="shimmerBG content-line m-t-24"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="btns">
                    <div className="shimmerBG  btn"></div>
                    <div className="shimmerBG  btn"></div>
                  </div>
                </div>
              </div>
    </Grid.Col>
  );
};

export default Loader;
