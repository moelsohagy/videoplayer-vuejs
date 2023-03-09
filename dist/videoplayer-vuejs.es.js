import { openBlock as D, createElementBlock as s, normalizeClass as A, createElementVNode as i, toDisplayString as c, createCommentVNode as j, Fragment as l, renderList as n, withModifiers as o, pushScopeId as T, popScopeId as a } from "vue";
const L = "data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDEyIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMTMiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAxNCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjI4OCIgaGVpZ2h0PSIyODgiPjxwYXRoIGZpbGw9IiNhYWFhYWEiIGQ9Ik01MS44MyA1NkgxMi4xN2ExMCAxMCAwIDAgMS0xMC0xMFYxOGExMCAxMCAwIDAgMSAyLjcxLTYuODUgMiAyIDAgMSAxIDIuOTIgMi43NEE2IDYgMCAwIDAgNi4xNyAxOHYyOGE2IDYgMCAwIDAgNiA2aDM5LjY2YTYgNiAwIDAgMCA2LTZWMThhNiA2IDAgMCAwLTYtNkgxNC43NmEyIDIgMCAxIDEgMC00aDM3LjA3YTEwIDEwIDAgMCAxIDEwIDEwdjI4YTEwIDEwIDAgMCAxLTEwIDEwWiIgY2xhc3M9ImNvbG9yMjIyIHN2Z1NoYXBlIj48L3BhdGg+PHBhdGggZmlsbD0iI2FhYWFhYSIgZD0iTTI0Ljg4IDQzLjhhMyAzIDAgMCAxLTMtM1YyMy4yYTMgMyAwIDAgMSA0LjQyLTIuNjRsMTYuNDEgOC44YTIgMiAwIDAgMS0xLjkgMy41MmwtMTQuOTMtOHYxNC4yNWw5LTQuODNhMiAyIDAgMSAxIDEuODkgMy41MkwyNi4zIDQzLjQ0YTMgMyAwIDAgMS0xLjQyLjM2WiIgY2xhc3M9ImNvbG9yMjIyIHN2Z1NoYXBlIj48L3BhdGg+PC9zdmc+PC9nPjwvc3ZnPg==", d = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yNzguOTQ0IDE3LjU3N2MtNS41NjgtMi42NTYtMTIuMTI4LTEuOTUyLTE2LjkyOCAxLjkyTDEwNi4zNjggMTQ0LjAwOUgzMmMtMTcuNjMyIDAtMzIgMTQuMzY4LTMyIDMydjEyOGMwIDE3LjY2NCAxNC4zNjggMzIgMzIgMzJoNzQuMzY4bDE1NS42MTYgMTI0LjUxMkExNi4xNTggMTYuMTU4IDAgMCAwIDI3MiA0NjQuMDA5YzIuMzY4IDAgNC43MzYtLjU0NCA2Ljk0NC0xLjZhMTUuOTY4IDE1Ljk2OCAwIDAgMCA5LjA1Ni0xNC40di00MTZhMTYuMDUgMTYuMDUgMCAwIDAtOS4wNTYtMTQuNDMyek0zNjguOTkyIDEyNi44NTdjLTYuMzA0LTYuMjA4LTE2LjQxNi02LjExMi0yMi42MjQuMTI4LTYuMjA4IDYuMzA0LTYuMTQ0IDE2LjQxNi4xMjggMjIuNjU2QzM3MC42ODggMTczLjUxMyAzODQgMjA1LjYwOSAzODQgMjQwLjAwOXMtMTMuMzEyIDY2LjQ5Ni0zNy41MDQgOTAuMzY4Yy02LjI3MiA2LjE3Ni02LjMzNiAxNi4zMi0uMTI4IDIyLjYyNGExNS45NDMgMTUuOTQzIDAgMCAwIDExLjM2IDQuNzM2YzQuMDY0IDAgOC4xMjgtMS41MzYgMTEuMjY0LTQuNjRDMzk5LjMyOCAzMjMuMjQxIDQxNiAyODMuMDQ5IDQxNiAyNDAuMDA5cy0xNi42NzItODMuMjMyLTQ3LjAwOC0xMTMuMTUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik00MTQuMTQ0IDgxLjc2OWMtNi4zMDQtNi4yNC0xNi40MTYtNi4xNzYtMjIuNjU2LjA5Ni02LjIwOCA2LjI3Mi02LjE0NCAxNi40MTYuMDk2IDIyLjYyNEM0MjcuOTY4IDE0MC41NTMgNDQ4IDE4OC42ODEgNDQ4IDI0MC4wMDlzLTIwLjAzMiA5OS40MjQtNTYuNDE2IDEzNS40ODhjLTYuMjQgNi4yNC02LjMwNCAxNi4zODQtLjA5NiAyMi42NTYgMy4xNjggMy4xMzYgNy4yNjQgNC43MDQgMTEuMzYgNC43MDQgNC4wNjQgMCA4LjE2LTEuNTM2IDExLjI5Ni00LjY0QzQ1Ni42NCAzNTYuMTM3IDQ4MCAyOTkuOTQ1IDQ4MCAyNDAuMDA5cy0yMy4zNi0xMTYuMTI4LTY1Ljg1Ni0xNTguMjR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==", r = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OC4wNzUgNDQ4LjA3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTM1Mi4wMjEgMTYuMDc1YzAtNi4wOC0zLjUyLTExLjg0LTguOTYtMTQuNC01Ljc2LTIuODgtMTIuMTYtMS45Mi0xNi45NiAxLjkybC0xNDEuNzYgMTEyLjk2IDE2Ny42OCAxNjcuNjh6TTQ0My4zNDkgNDIwLjc0N2wtNDE2LTQxNmMtNi4yNC02LjI0LTE2LjM4NC02LjI0LTIyLjYyNCAwcy02LjI0IDE2LjM4NCAwIDIyLjYyNGwxMDAuNjcyIDEwMC43MDRoLTkuMzc2Yy05LjkyIDAtMTguNTYgNC40OC0yNC4zMiAxMS41Mi00LjggNS40NC03LjY4IDEyLjgtNy42OCAyMC40OHYxMjhjMCAxNy42IDE0LjQgMzIgMzIgMzJoNzQuMjRsMTU1Ljg0IDEyNC40OGMyLjg4IDIuMjQgNi40IDMuNTIgOS45MiAzLjUyIDIuMjQgMCA0LjgtLjY0IDcuMDQtMS42IDUuNDQtMi41NiA4Ljk2LTguMzIgOC45Ni0xNC40di01Ny4zNzZsNjguNjcyIDY4LjY3MmMzLjEzNiAzLjEzNiA3LjIzMiA0LjcwNCAxMS4zMjggNC43MDRzOC4xOTItMS41NjggMTEuMzI4LTQuNjcyYzYuMjQtNi4yNzIgNi4yNC0xNi4zODQgMC0yMi42NTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg==", m = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQwNS4yODQgMjAxLjE4OCAxMzAuODA0IDEzLjI4QzExOC4xMjggNC41OTYgMTA1LjM1NiAwIDk0Ljc0IDAgNzQuMjE2IDAgNjEuNTIgMTYuNDcyIDYxLjUyIDQ0LjA0NHY0MDYuMTI0YzAgMjcuNTQgMTIuNjggNDMuOTggMzMuMTU2IDQzLjk4IDEwLjYzMiAwIDIzLjItNC42IDM1LjkwNC0xMy4zMDhsMjc0LjYwOC0xODcuOTA0YzE3LjY2LTEyLjEwNCAyNy40NC0yOC4zOTIgMjcuNDQtNDUuODg0LjAwNC0xNy40OC05LjY2NC0zMy43NjQtMjcuMzQ0LTQ1Ljg2NHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+", C = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMTMgNXYyMmEzIDMgMCAwIDEtMyAzSDlhMyAzIDAgMCAxLTMtM1Y1YTMgMyAwIDAgMSAzLTNoMWEzIDMgMCAwIDEgMyAzem0xMC0zaC0xYTMgMyAwIDAgMC0zIDN2MjJhMyAzIDAgMCAwIDMgM2gxYTMgMyAwIDAgMCAzLTNWNWEzIDMgMCAwIDAtMy0zeiIgZGF0YS1uYW1lPSJMYXllciAzMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4=", w = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDYxMi4wMiA2MTIuMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDYxMi4wMTg1MTg0NDc4NzYsMCkiPjxwYXRoIGQ9Ik01OTYuOTYgMjY5LjY3NCAzNDIuMzgxIDE1LjA5NGMtMjAuMDc5LTIwLjA3OS01Mi42NDQtMjAuMDc5LTcyLjcyMyAwcy0yMC4wNzkgNTIuNjQ0IDAgNzIuNzIzTDQ4Ny44NTIgMzA2LjAxIDI2OS42NTggNTI0LjIwMmMtMjAuMDc5IDIwLjA3OS0yMC4wNzkgNTIuNjQ0IDAgNzIuNzIzczUyLjY0NCAyMC4wNzkgNzIuNzIzIDBMNTk2Ljk2IDM0Mi4zNDZjMjAuMDc5LTIwLjAyOSAyMC4wNzktNTIuNTkzIDAtNzIuNjcyem0tMzA2LjEwMi0xNS40MTZMODguNzQ0IDQxLjIzOGMtMjAuMzA5LTIxLjM3OC01My4yMDQtMjEuMzc4LTczLjUxMyAwcy0yMC4zMDkgNTYuMDU4IDAgNzcuNDYybDE2NS4zNzEgMTc0LjI4OUwxNS4yMzEgNDY3LjI3OGMtMjAuMzA5IDIxLjM3OS0yMC4zMDkgNTYuMDgzIDAgNzcuNDYyczUzLjIwNCAyMS4zNzkgNzMuNTEzIDBsMjAyLjExNC0yMTMuMDJjMjAuMzA5LTIxLjM3OCAyMC4zMDktNTYuMDU4IDAtNzcuNDYyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=", x = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDYxMi4wMiA2MTIuMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik01OTYuOTYgMjY5LjY3NCAzNDIuMzgxIDE1LjA5NGMtMjAuMDc5LTIwLjA3OS01Mi42NDQtMjAuMDc5LTcyLjcyMyAwcy0yMC4wNzkgNTIuNjQ0IDAgNzIuNzIzTDQ4Ny44NTIgMzA2LjAxIDI2OS42NTggNTI0LjIwMmMtMjAuMDc5IDIwLjA3OS0yMC4wNzkgNTIuNjQ0IDAgNzIuNzIzczUyLjY0NCAyMC4wNzkgNzIuNzIzIDBMNTk2Ljk2IDM0Mi4zNDZjMjAuMDc5LTIwLjAyOSAyMC4wNzktNTIuNTkzIDAtNzIuNjcyem0tMzA2LjEwMi0xNS40MTZMODguNzQ0IDQxLjIzOGMtMjAuMzA5LTIxLjM3OC01My4yMDQtMjEuMzc4LTczLjUxMyAwcy0yMC4zMDkgNTYuMDU4IDAgNzcuNDYybDE2NS4zNzEgMTc0LjI4OUwxNS4yMzEgNDY3LjI3OGMtMjAuMzA5IDIxLjM3OS0yMC4zMDkgNTYuMDgzIDAgNzcuNDYyczUzLjIwNCAyMS4zNzkgNzMuNTEzIDBsMjAyLjExNC0yMTMuMDJjMjAuMzA5LTIxLjM3OCAyMC4zMDktNTYuMDU4IDAtNzcuNDYyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4=", E = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00OTAuNjY3IDQwNS4zMzNoLTU2LjgxMUM0MjQuNjE5IDM3NC41OTIgMzk2LjM3MyAzNTIgMzYyLjY2NyAzNTJzLTYxLjkzMSAyMi41OTItNzEuMTg5IDUzLjMzM0gyMS4zMzNDOS41NTcgNDA1LjMzMyAwIDQxNC44OTEgMCA0MjYuNjY3UzkuNTU3IDQ0OCAyMS4zMzMgNDQ4aDI3MC4xNDRjOS4yMzcgMzAuNzQxIDM3LjQ4MyA1My4zMzMgNzEuMTg5IDUzLjMzM3M2MS45MzEtMjIuNTkyIDcxLjE4OS01My4zMzNoNTYuODExYzExLjc5NyAwIDIxLjMzMy05LjU1NyAyMS4zMzMtMjEuMzMzcy05LjUzNS0yMS4zMzQtMjEuMzMyLTIxLjMzNHptLTEyOCA1My4zMzRjLTE3LjY0MyAwLTMyLTE0LjM1Ny0zMi0zMnMxNC4zNTctMzIgMzItMzIgMzIgMTQuMzU3IDMyIDMyLTE0LjM1OCAzMi0zMiAzMnpNNDkwLjY2NyA2NGgtNTYuODExYy05LjI1OS0zMC43NDEtMzcuNDgzLTUzLjMzMy03MS4xODktNTMuMzMzUzMwMC43MzYgMzMuMjU5IDI5MS40NzcgNjRIMjEuMzMzQzkuNTU3IDY0IDAgNzMuNTU3IDAgODUuMzMzczkuNTU3IDIxLjMzMyAyMS4zMzMgMjEuMzMzaDI3MC4xNDRDMzAwLjczNiAxMzcuNDA4IDMyOC45NiAxNjAgMzYyLjY2NyAxNjBzNjEuOTMxLTIyLjU5MiA3MS4xODktNTMuMzMzaDU2LjgxMWMxMS43OTcgMCAyMS4zMzMtOS41NTcgMjEuMzMzLTIxLjMzM1M1MDIuNDY0IDY0IDQ5MC42NjcgNjR6bS0xMjggNTMuMzMzYy0xNy42NDMgMC0zMi0xNC4zNTctMzItMzJzMTQuMzU3LTMyIDMyLTMyIDMyIDE0LjM1NyAzMiAzMi0xNC4zNTggMzItMzIgMzJ6TTQ5MC42NjcgMjM0LjY2N0gyMjAuNTIzYy05LjI1OS0zMC43NDEtMzcuNDgzLTUzLjMzMy03MS4xODktNTMuMzMzcy02MS45MzEgMjIuNTkyLTcxLjE4OSA1My4zMzNIMjEuMzMzQzkuNTU3IDIzNC42NjcgMCAyNDQuMjI0IDAgMjU2YzAgMTEuNzc2IDkuNTU3IDIxLjMzMyAyMS4zMzMgMjEuMzMzaDU2LjgxMWM5LjI1OSAzMC43NDEgMzcuNDgzIDUzLjMzMyA3MS4xODkgNTMuMzMzczYxLjkzMS0yMi41OTIgNzEuMTg5LTUzLjMzM2gyNzAuMTQ0YzExLjc5NyAwIDIxLjMzMy05LjU1NyAyMS4zMzMtMjEuMzMzLjAwMS0xMS43NzYtOS41MzUtMjEuMzMzLTIxLjMzMi0yMS4zMzN6TTE0OS4zMzMgMjg4Yy0xNy42NDMgMC0zMi0xNC4zNTctMzItMzJzMTQuMzU3LTMyIDMyLTMyIDMyIDE0LjM1NyAzMiAzMi0xNC4zNTcgMzItMzIgMzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg==", Y = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMSAxIDIyIDIyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTIgMS4yNWExMS4xMzMgMTEuMTMzIDAgMCAwLTEuNTMuMTEuNzYxLjc2MSAwIDAgMC0uNjQuODUuNzYyLjc2MiAwIDAgMCAuNzUuNjQuMzQuMzQgMCAwIDAgLjEtLjAxQTkuNzU5IDkuNzU5IDAgMCAxIDEyIDIuNzVhLjc1Ljc1IDAgMCAwIDAtMS41ek04LjM5IDIuNjRhLjc1Ljc1IDAgMCAwLTEtLjM2IDExLjAxOSAxMS4wMTkgMCAwIDAtMS44MyAxLjExLjc1Ljc1IDAgMCAwLS4xNSAxLjA1LjcyNi43MjYgMCAwIDAgLjYuMy43Ni43NiAwIDAgMCAuNDUtLjE1IDguNzE3IDguNzE3IDAgMCAxIDEuNTgtLjk1Ljc1Mi43NTIgMCAwIDAgLjM1LTF6TTQuMzUgNS41MWEuNzYzLjc2MyAwIDAgMC0xLjA1LjE3IDExLjQ1IDExLjQ1IDAgMCAwLTEuMDggMS44NS43NTcuNzU3IDAgMCAwIC4zNyAxIC44Ny44NyAwIDAgMCAuMzEuMDcuNzQ1Ljc0NSAwIDAgMCAuNjgtLjQ0IDkuMTg5IDkuMTg5IDAgMCAxIC45NC0xLjYuNzYzLjc2MyAwIDAgMC0uMTctMS4wNXptLTEuNTIgNS4zYS43NTEuNzUxIDAgMCAwLTEuNDktLjE5QTEwLjU0NCAxMC41NDQgMCAwIDAgMS4yNSAxMmMwIC4yNi4wMS41MS4wMy43N2EuNzM2LjczNiAwIDAgMCAuNzQuNjloLjA2YS43NDkuNzQ5IDAgMCAwIC42OS0uOGMtLjAxLS4yMi0uMDItLjQ0LS4wMi0uNjZhOS4zODggOS4zODggMCAwIDEgLjA4LTEuMTl6TTQuMjIgMTdhOC43NTcgOC43NTcgMCAwIDEtLjg0LTEuNjQuNzUuNzUgMCAwIDAtMS40LjU0IDEwLjQzNCAxMC40MzQgMCAwIDAgLjk4IDEuOTEuNzUxLjc1MSAwIDAgMCAuNjMuMzUuNzIxLjcyMSAwIDAgMCAuNC0uMTIuNzU4Ljc1OCAwIDAgMCAuMjMtMS4wNHptMy4zNSAzLjEyYTEwLjA0OCAxMC4wNDggMCAwIDEtMS41My0xLjA0Ljc0NS43NDUgMCAwIDAtLjk2IDEuMTQgMTAuOSAxMC45IDAgMCAwIDEuNzcgMS4yMi43NDUuNzQ1IDAgMCAwIDEuMDEtLjMuNzUzLjc1MyAwIDAgMC0uMjktMS4wMnpNMTIgMjEuMjVhOS40MDkgOS40MDkgMCAwIDEtMS44NC0uMTguNzQ5Ljc0OSAwIDEgMC0uMjkgMS40NyAxMC43NiAxMC43NiAwIDAgMCAyLjEzLjIxLjc1Ljc1IDAgMCAwIDAtMS41ek0xNS44IDEwLjU3NmwtNC4yODMtMy4wNTdBMS43NSAxLjc1IDAgMCAwIDguNzUgOC45NDN2Ni4xMTRhMS43NDIgMS43NDIgMCAwIDAgLjk1IDEuNTU2IDEuNzQ0IDEuNzQ0IDAgMCAwIDEuODE4LS4xMzJsNC4yODItMy4wNTdhMS43NSAxLjc1IDAgMCAwIDAtMi44NDh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTEyIDIyLjc1YS43NS43NSAwIDAgMSAwLTEuNSA5LjI1IDkuMjUgMCAwIDAgMC0xOC41Ljc1Ljc1IDAgMCAxIDAtMS41IDEwLjc1IDEwLjc1IDAgMCAxIDAgMjEuNXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+", S = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMiAyIDIwIDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDE3VjdoMTZ2MTB6TTIgNS41YS41LjUgMCAwIDEgLjUtLjVoMTlhLjUuNSAwIDAgMSAuNS41djEzYS41LjUgMCAwIDEtLjUuNWgtMTlhLjUuNSAwIDAgMS0uNS0uNXpNMTIuNSAxMWEuNS41IDAgMCAwLS41LjV2NGEuNS41IDAgMCAwIC41LjVoNmEuNS41IDAgMCAwIC41LS41di00YS41LjUgMCAwIDAtLjUtLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9zdmc+", O = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0xODEuMiAzMmEzMiAzMiAwIDAgMS0zMiAzMkg2NHY4NS4yYTMyIDMyIDAgMCAxLTY0IDBWMzJBMzIgMzIgMCAwIDEgMzIgMGgxMTcuMmEzMiAzMiAwIDAgMSAzMiAzMnptLTMyIDQxNkg2NHYtODUuMmEzMiAzMiAwIDAgMC02NCAwVjQ4MGEzMiAzMiAwIDAgMCAzMiAzMmgxMTcuMmEzMiAzMiAwIDEgMCAwLTY0ek00ODAgMzMwLjhhMzIgMzIgMCAwIDAtMzIgMzJWNDQ4aC04NS4yYTMyIDMyIDAgMSAwIDAgNjRINDgwYTMyIDMyIDAgMCAwIDMyLTMyVjM2Mi44YTMyIDMyIDAgMCAwLTMyLTMyek00ODAgMEgzNjIuOGEzMiAzMiAwIDAgMCAwIDY0SDQ0OHY4NS4yYTMyIDMyIDAgMSAwIDY0IDBWMzJhMzIgMzIgMCAwIDAtMzItMzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==";
const p = (I, M) => {
  const u = I.__vccOpts || I;
  for (const [g, N] of M)
    u[g] = N;
  return u;
}, v = {
  name: "VueVideoplayer",
  props: {
    sources: { type: Array, default: () => [] },
    poster: { type: String, default: L }
  },
  data() {
    return {
      defaultPoster: L,
      volumeHighIcon: d,
      volumeMuteIcon: r,
      playIcon: m,
      pauseIcon: C,
      controls: !1,
      smallScreen: !1,
      draggingProgressBar: !1,
      currentSrc: this.sources[0],
      video: null,
      paused: !0,
      fullscreen: !1,
      currentTime: "0",
      duration: "0",
      volume: "0.5",
      volumeBeforeMute: "0.5",
      speedOptionsOpend: !1,
      speedOptions: [
        { title: "2x", value: 2, active: !1 },
        // { title: '1.75x', value: 1.75, active: false },
        { title: "1.5x", value: 1.5, active: !1 },
        // { title: '1.25x', value: 1.25, active: false },
        { title: "normal", value: 1, active: !0 },
        // { title: '0.75x', value: 0.75, active: false },
        { title: "0.5x", value: 0.5, active: !1 },
        { title: "0.25x", value: 0.25, active: !1 }
      ],
      resolutionOptionsOpend: !1,
      resolutionOptions: [
        { title: "240", value: 2, active: !0 },
        { title: "360", value: 1.5, active: !1 },
        { title: "480p", value: 1, active: !1 },
        { title: "720p", value: 0.5, active: !1 },
        { title: "1080p", value: 0.25, active: !1 }
      ]
    };
  },
  computed: {
    src() {
      const I = this.sources.findIndex(
        (M) => this.currentSrc && this.currentSrc.resolution == M.resolution
      );
      return I > -1 ? this.sources[I].src : this.sources[0].src;
    },
    type() {
      const I = this.sources.findIndex(
        (M) => this.currentSrc && this.currentSrc.resolution == M.resolution
      );
      return I > -1 ? this.sources[I].type : this.sources[0].type;
    }
  },
  methods: {
    formatTime(I) {
      let M = Math.floor(Number(I) % 60), u = Math.floor(Number(I) / 60) % 60, g = Math.floor(Number(I) / 3600);
      return M = M < 10 ? `0${M}` : `${M}`, u = u < 10 ? `0${u}` : `${u}`, g = g < 10 ? `0${g}` : `${g}`, Number(g) == 0 ? `${u}:${M}` : `${g}:${u}:${M}`;
    },
    loadeddata(I) {
      const { duration: M } = I.target;
      this.duration = Math.round(M) || "0";
    },
    timeupdate(I) {
      const { currentTime: M, duration: u } = I.target;
      this.currentTime = Math.round(M) || "0";
      const g = M / u * 100;
      this.video.parentElement.querySelector(".progress-area").style.setProperty("--progress-width", `${g}%`);
    },
    changeVideoTimeline(I) {
      const M = this.video.parentElement.querySelector(".progress-area").clientWidth;
      this.video.currentTime = I.offsetX / M * this.video.duration;
    },
    draggableProgressBar(I) {
      if (this.draggingProgressBar) {
        this.video.parentElement.querySelector(".progress-area").style.setProperty("--progress-width", `${I.offsetX}px`);
        const M = this.video.parentElement.querySelector(".progress-area").clientWidth;
        this.video.currentTime = I.offsetX / M * this.video.duration;
      }
    },
    startDragProgressBar() {
      this.draggingProgressBar = !0;
    },
    stopDragProgressBar() {
      this.draggingProgressBar = !1;
    },
    toggleVolumeMute() {
      Number(this.video.volume) ? (this.video.volume = "0.0", this.volume = "0.0") : (this.video.volume = this.volumeBeforeMute, this.volume = this.volumeBeforeMute);
    },
    changeVolume(I) {
      this.video.volume = I.target.value, this.volume = I.target.value, this.volumeBeforeMute = Number(I.target.value) == 0 ? "0.1" : I.target.value;
    },
    togglePlayPause() {
      this.video.paused ? this.video.play() : this.video.pause();
    },
    skip(I) {
      switch (I) {
        case "fowward":
          this.video.currentTime += 5;
          break;
        case "backward":
          this.video.currentTime -= 5;
          break;
      }
    },
    changeSpeedOptions(I) {
      const M = this.speedOptions.findIndex(
        (u) => u.value == I
      );
      M > -1 && (this.video.playbackRate = I, this.speedOptions = this.speedOptions.map((u) => ({
        ...u,
        active: !1
      })), this.speedOptions[M].active = !0);
    },
    togglePicInPic() {
      document.pictureInPictureElement ? document.exitPictureInPicture() : this.video.requestPictureInPicture();
    },
    toggleFullscreen() {
      if (!document.fullscreenElement)
        this.fullscreen = !0, this.video.parentElement.requestFullscreen();
      else
        return this.fullscreen = !1, document.exitFullscreen();
    },
    changeResolutionOptions(I) {
      this.currentSrc = I;
      const M = this.video.currentTime, u = this.video.paused;
      this.video.load(), this.video.currentTime = M, u || this.video.play();
    },
    checkMobility() {
      window.innerWidth < 768 ? this.smallScreen = !1 : this.smallScreen = !0;
    }
  },
  mounted() {
    this.video = this.$refs.myVideo, window.addEventListener("mouseup", this.stopDragProgressBar), window.addEventListener("click", (I) => {
      !I.target.closest(".playback-content") && !I.target.classList.contains("playback-content") && (this.speedOptionsOpend = !1), !I.target.closest(".resolution-content") && !I.target.classList.contains("resolution-content") && (this.resolutionOptionsOpend = !1);
    }), this.checkMobility(), window.addEventListener("resize", this.checkMobility);
  }
}, z = (I) => (T("data-v-ccece0b9"), I = I(), a(), I), Z = { class: "wrapper" }, b = { class: "progress-area" }, h = /* @__PURE__ */ z(() => /* @__PURE__ */ i("div", { class: "progress-bar" }, null, -1)), Q = { class: "video-controls" }, k = { class: "options left" }, G = ["src"], P = ["value"], U = { class: "video-timer" }, H = { class: "current-time" }, W = /* @__PURE__ */ z(() => /* @__PURE__ */ i("p", { class: "separator" }, "/", -1)), B = { class: "video-duration" }, f = {
  key: 0,
  class: "options center"
}, J = /* @__PURE__ */ z(() => /* @__PURE__ */ i("img", {
  src: w,
  alt: "skip-backward"
}, null, -1)), R = [
  J
], _ = ["src"], V = /* @__PURE__ */ z(() => /* @__PURE__ */ i("img", {
  src: x,
  alt: "skip-forward"
}, null, -1)), F = [
  V
], X = { class: "options right" }, q = /* @__PURE__ */ z(() => /* @__PURE__ */ i("button", { class: "resolution" }, [
  /* @__PURE__ */ i("img", {
    src: E,
    alt: "resolution"
  })
], -1)), K = ["onClick"], $ = /* @__PURE__ */ z(() => /* @__PURE__ */ i("button", { class: "playback-speed" }, [
  /* @__PURE__ */ i("img", {
    src: Y,
    alt: "video-speed"
  })
], -1)), MM = ["onClick"], IM = /* @__PURE__ */ z(() => /* @__PURE__ */ i("img", {
  src: S,
  alt: "pic-in-pic"
}, null, -1)), eM = [
  IM
], iM = /* @__PURE__ */ z(() => /* @__PURE__ */ i("img", {
  src: O,
  alt: "full-screen"
}, null, -1)), tM = [
  iM
], NM = ["controls", "poster"], uM = ["src", "type"];
function gM(I, M, u, g, N, t) {
  return D(), s("div", {
    class: A(["videoplayer-vuejs-container", `${N.fullscreen ? "fullscreen" : ""} ${N.paused ? "paused" : ""}`])
  }, [
    i("div", Z, [
      i("div", {
        class: "video-timeline",
        onClick: M[0] || (M[0] = (...e) => t.changeVideoTimeline && t.changeVideoTimeline(...e)),
        onMousedown: M[1] || (M[1] = (...e) => t.startDragProgressBar && t.startDragProgressBar(...e)),
        onMousemove: M[2] || (M[2] = (...e) => t.draggableProgressBar && t.draggableProgressBar(...e))
      }, [
        i("div", b, [
          i("span", null, c(t.formatTime(N.currentTime)), 1),
          h
        ])
      ], 32),
      i("ul", Q, [
        i("li", k, [
          i("button", {
            class: "volume",
            onClick: M[3] || (M[3] = (...e) => t.toggleVolumeMute && t.toggleVolumeMute(...e))
          }, [
            i("img", {
              src: Number(N.volume) > 0 ? N.volumeHighIcon : N.volumeMuteIcon,
              alt: "volume"
            }, null, 8, G)
          ]),
          i("input", {
            type: "range",
            value: N.volume,
            min: "0",
            max: "1",
            step: "0.01",
            onInput: M[4] || (M[4] = (...e) => t.changeVolume && t.changeVolume(...e))
          }, null, 40, P),
          i("div", U, [
            i("p", H, c(t.formatTime(N.currentTime)), 1),
            W,
            i("p", B, c(t.formatTime(N.duration)), 1)
          ])
        ]),
        N.smallScreen ? (D(), s("li", f, [
          i("button", {
            class: "skip-backward",
            onClick: M[5] || (M[5] = (e) => t.skip("backward"))
          }, R),
          i("button", {
            class: "play-pause",
            onClick: M[6] || (M[6] = (...e) => t.togglePlayPause && t.togglePlayPause(...e))
          }, [
            i("img", {
              src: N.paused ? N.playIcon : N.pauseIcon,
              alt: "play-pause"
            }, null, 8, _)
          ]),
          i("button", {
            class: "skip-fowward",
            onClick: M[7] || (M[7] = (e) => t.skip("fowward"))
          }, F)
        ])) : j("", !0),
        i("li", X, [
          u.sources.length > 1 ? (D(), s("div", {
            key: 0,
            class: "options-content resolution-content",
            onClick: M[8] || (M[8] = (e) => N.resolutionOptionsOpend = !N.resolutionOptionsOpend)
          }, [
            q,
            i("ul", {
              class: A(["options-item", N.resolutionOptionsOpend ? "opened" : ""])
            }, [
              (D(!0), s(l, null, n(u.sources, (e) => (D(), s("li", {
                key: e.resolution,
                class: A(
                  e.resolution == N.currentSrc.resolution ? "active" : ""
                ),
                onClick: (y) => t.changeResolutionOptions(e)
              }, c(e.resolution), 11, K))), 128))
            ], 2)
          ])) : j("", !0),
          i("div", {
            class: "options-content playback-content",
            onClick: M[9] || (M[9] = (e) => N.speedOptionsOpend = !N.speedOptionsOpend)
          }, [
            $,
            i("ul", {
              class: A(["options-item", N.speedOptionsOpend ? "opened" : ""])
            }, [
              (D(!0), s(l, null, n(N.speedOptions, (e) => (D(), s("li", {
                key: e.value,
                class: A(e.active ? "active" : ""),
                onClick: (y) => t.changeSpeedOptions(e.value)
              }, c(e.title), 11, MM))), 128))
            ], 2)
          ]),
          i("button", {
            class: "pic-in-pic",
            onClick: M[10] || (M[10] = (...e) => t.togglePicInPic && t.togglePicInPic(...e))
          }, eM),
          i("button", {
            class: "fullscreen",
            onClick: M[11] || (M[11] = (...e) => t.toggleFullscreen && t.toggleFullscreen(...e))
          }, tM)
        ])
      ])
    ]),
    i("video", {
      onClick: M[12] || (M[12] = o((...e) => t.togglePlayPause && t.togglePlayPause(...e), ["self"])),
      onDblclick: M[13] || (M[13] = o((...e) => t.toggleFullscreen && t.toggleFullscreen(...e), ["self"])),
      onTimeupdate: M[14] || (M[14] = (...e) => t.timeupdate && t.timeupdate(...e)),
      onLoadeddata: M[15] || (M[15] = (...e) => t.loadeddata && t.loadeddata(...e)),
      onPlay: M[16] || (M[16] = (e) => N.paused = !1),
      onPause: M[17] || (M[17] = (e) => N.paused = !0),
      ref: "myVideo",
      autopictureinpicture: "true",
      controls: N.controls,
      preload: "auto",
      poster: u.poster,
      "data-setup": "{}"
    }, [
      i("source", {
        src: t.src,
        type: t.type
      }, null, 8, uM)
    ], 40, NM)
  ], 2);
}
const zM = /* @__PURE__ */ p(v, [["render", gM], ["__scopeId", "data-v-ccece0b9"]]), sM = {
  install: (I, M) => {
    I.component("VideoplayerVuejs", zM);
  }
};
export {
  sM as default
};
