import "@babel/polyfill";
import Message from './classes/Message';
import Mobile from './classes/Mobile';
import MEC from './classes/MEC';
import { makeSequence } from "./utils";

const mobile1 = new Mobile('m1');
mobile1.allocateServer('1');
mobile1.runS2();

