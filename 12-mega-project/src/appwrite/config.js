import conf from '../conf/conf'
import { Client, ID, TablesDB, Query } from "appwrite";

export class Service {
    client = new Client();
    tablesDB;


    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.tablesDB = new TablesDB(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.tablesDB.createRow(
                conf.appWriteDatabaseId,
                conf.appWriteTableId,
                ID.unique(),
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);

        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow(
                conf.appWriteDatabaseId,
                conf.appWriteTableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service:: updatePost :: error", error);

        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow(
                conf.appWriteDatabaseId,
                conf.appWriteTableId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows(
                conf.appWriteDatabaseId,
                conf.appWriteTableId,
                queries
            )

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }
}

const service = new Service()
export default service
