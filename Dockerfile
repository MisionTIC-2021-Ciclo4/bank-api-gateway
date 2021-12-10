#
#	 Dockerfile is part of "Demo MisionTIC-2021 C4 - APIGateway", 
#    created by Carlos Andrés Sierra.
#
#    "Demo MisionTIC-2021 C4 - APIGateway" is free software: 
#    you can redistribute it and/or modify it under the terms of the 
#    GNU General Public License as published by the Free Software Foundation, 
#    either version 3 of the License, or (at your option) any later version.
#
#    "Demo MisionTIC-2021 C4 - APIGateway" is distributed in 
#    the hope that it will be useful, but WITHOUT ANY WARRANTY; 
#    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A 
#    PARTICULAR PURPOSE.  See the GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with "Demo MisionTIC-2021 C4 - APIGateway". 
#    If not, see <https://www.gnu.org/licenses/>.
#
#    For contact, you can write to casierrav@unal.edu.co
#

# setup environment
FROM node:14

# copy application
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# execute as a process
EXPOSE 4000
CMD ["node", "src/index.js"]