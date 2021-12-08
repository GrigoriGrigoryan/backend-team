//    import 'reflect-metadata'; // ------------------------------------------------------- ?
import {createConnection} from "typeorm";
import config from "./ormconfig";
import {getApplication, port} from "./app";

const server = (): void => {
	createConnection(config)
		.then((connection) => {
			console.log(`Please wait for downloading... ⛑️`);
			const app = getApplication();
			app.listen(port, () => {
				console.log(`Server is runnig on port: ${port} ✔️ 🎉`);
			})
		}).catch((err: any) => {
		console.log(`Hello ...📌... My name is Error, I am here because downloading had gone unsuccessfully... 🚨`, err);
		throw err;
	});
};
server();