# LaserPowerSurface
UT Mechanical Engineering project based on Trevor Ricker, Tim Phillips, and Austin McElroys laser power control project. 

## Fixed point 
The main purpose of this project is to emulate fixed point FPGA math and rounding and check values vs. full floating point (64-bit) precision numbers. The numbers used were the Decimal class number provided by decimal.js. Each number is limited to 6-bits of precision and will be checked against double precision numbers.
