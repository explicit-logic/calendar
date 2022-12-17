#!/usr/bin/env node
import { getTotalDaysCount } from './main';

const now = new Date();

console.log(now.getFullYear());
console.log(getTotalDaysCount(now));
