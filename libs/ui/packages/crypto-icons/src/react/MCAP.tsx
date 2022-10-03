import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#033B4A";

function MCAP({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M11.65 6.048c.417-.122.86.002 1.22.22 1.61.922 3.226 1.831 4.849 2.727.625.33 1.04 1.01 1.031 1.71-.001 2.32-.007 4.643-.004 6.963.026.161-.084.345-.267.329-.72.004-1.441.001-2.162 0-.157.023-.309-.108-.292-.268-.07-1.976-.043-3.955-.023-5.933 0-.247-.048-.508-.208-.708-.162-.213-.417-.321-.646-.447-.375-.197-.728-.435-1.117-.607-.147-.058-.338-.121-.477-.01-.154.146-.152.374-.168.57a55.14 55.14 0 00-.008 2.91c0 .229.007.496-.169.674-.18.176-.45.179-.685.182-.426-.004-.852.012-1.277-.01-.18-.019-.396-.03-.513-.187-.105-.155-.1-.35-.11-.53-.002-1.018.011-2.038 0-3.057-.01-.18-.007-.383-.134-.525-.123-.126-.318-.085-.465-.031-.318.124-.604.315-.906.472-.303.174-.627.322-.887.56-.169.153-.214.387-.219.603-.004 2.003.002 4.004-.015 6.006.017.152-.073.336-.25.333-.742.01-1.485.004-2.227.003-.149.014-.285-.117-.27-.264.03-2.434.011-4.869.013-7.303a1.386 1.386 0 01.718-1.253c1.691-.948 3.386-1.89 5.07-2.849.19-.108.383-.221.597-.28z"  /></Svg>;
}

MCAP.DefaultColor = DefaultColor;
export default MCAP;