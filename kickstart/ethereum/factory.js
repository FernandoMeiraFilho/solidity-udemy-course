import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x200df0f27b7E52917403790D78ABf9d7F464D075"
);

export default instance;
