const { commentModel } = require('../model')

class commentController {
    // 添加评论
    static async add(ctx) {
        try {
            let params = ctx.request.body
            let response = await commentModel.create(params)
            ctx.body = {
                status: 1,
                message: '添加成功',
                response
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    // 文章评论列表+分页
    static async list(ctx) {
        try {
            let { currentPage, pageSize, articleId } = ctx.query
            currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
            pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
            let allResponse = await commentModel.findAll({
                where: {
                    articleId
                }
            })
            let total = allResponse.length      // 全部条数
            let pageCount = Math.ceil(total / pageSize)   // 页数
            let response = await commentModel.findAll({
                offset: (currentPage - 1) * pageSize,
                limit: pageSize,
                where: {
                    articleId
                }
            })
            ctx.body = {
                status: 1,
                message: '查询成功',
                response,
                pager: {
                    total,
                    currentPage,
                    pageSize,
                    pageCount,
                }
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    // 删除评论
    static async del(ctx) {
        try {
            let { id } = ctx.params;
            let response = await commentModel.destroy({
                where: {
                    id: id
                }
            })
            if (response === 1) {
                ctx.body = {
                    status: 1,
                    message: '删除成功'
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '删除失败'
                }
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }

    }
}

module.exports = commentController