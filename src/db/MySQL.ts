import { createConnection, Connection } from 'mysql';

import Utilisateur from '../models/Utilisateur';
import Tuteur from '../models/Tuteur';
import Enfant from '../models/Enfant';
import listAttributSelect, { listeTables } from '../utils/listAttributSelect';

export interface jointureInterface {
    type: 'LEFT' | 'RIGHT' | 'FULL' | 'INNER';
    where: {
        table: listeTables;
        foreignKey: string;
    }
    table: listeTables;
}

export default abstract class MySQL {
    /**
     *
     * Insertion of any defined entity
     * @static
     * @param {string} table
     * @param {(Tuteur | Enfant | Utilisateur)} insert
     * @returns {Promise < number >}
     * @memberof MySQL
     */
     static insert(table: string, instance: Tuteur | Enfant | Utilisateur): Promise < number > {
        return new Promise((resolve, reject) => { // return Promise because the processing time of the database | The only way to get an answer is the "resolve()" or "reject()"

            const bdd: Connection = createConnection({ // Init params to database
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                port: parseInt((process.env.PORTMYSQL === undefined) ? '3307' : process.env.PORTMYSQL) // 3306 port default to mysql
            })
            bdd.connect(err => {
                if (err) console.log('Connection database error');
            })

            let data = []; // Stock value
            let columns = "";
            let parameters = "";

            for (const [key, value] of Object.entries(instance)) { // Convert the properties of our objects to an array
                if (instance.attributInsert.indexOf(key) !== -1) { // Check to property to the key array because the children Object will acces property parent
                    columns += "`" + key + "`,";
                    parameters += "?,";
                    data.push(value)
                }
            }
            columns = columns.slice(0, -1); // delete the last carac.
            parameters = parameters.slice(0, -1);

            bdd.query(`INSERT INTO ${table} (${columns}) VALUES (${parameters})  `, data, (error, results, fields) => { // excute request sql
                if (error) {
                    reject(error); // Reponse promise false => catch
                    console.log(error);
                } else
                    resolve(results.insertId); // Reponse promise true => then or await
                bdd.end(); // Close database
            });

        })

    }
}