import conf from '../conf/conf'
import { Client, ID, Storage } from "appwrite";

export class FileUpload {

    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.storage = new Storage(this.client)
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite FileUpload :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite FileUpload :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }

}

const fileUpload = new FileUpload();
export default fileUpload;