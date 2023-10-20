package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type User struct {
	Username string `json: username`
	Password string `json: password`
}

func setupRouter() *gin.Engine {
	var service_name = os.Getenv("APP_NAME")
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		data := map[string]interface{}{
			"app-name": service_name,
			"message":  "pong",
		}
		c.AsciiJSON(http.StatusOK, data)
	})

	r.GET("/", func(c *gin.Context) {
		data := map[string]interface{}{
			"status":  "200",
			"message": "Welcome to Trial Golang Rest API",
		}
		c.AsciiJSON(http.StatusOK, data)
	})

	return r
}

func main() {
	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")

}
