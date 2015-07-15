package api

import (
	"app/server/utils"

	"github.com/gin-gonic/gin"
)

func ConfHandler(c *gin.Context) {
	kit := c.MustGet("kit").(*utils.Kit)
	c.JSON(200, kit.Conf.Root)
}