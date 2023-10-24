## Authentication 🔐
### Authentication service 🛠️ & Guards 🛡️
    [X] signin with firebase
    [X] logout with firebase
    [ ] persistent state with userId
    [ ] protected routes (Guards)
        [X] authGuard
        [ ] rolesGuard

## Forms 📝
    [ ] create generics fields
        [X] input
### auth form 🛠️
    [ ] login
        [X] styling basic form
        [ ] use Validators to style de fields
    [ ] register
### management forms ⚙️
    [ ] vines
    [ ] variety
    [ ] task

## Unit tests 🧪

## Dashboard
### UI
    [ ] Vine LastMaintenance display
        [ ] fetch task if lastMaintenance is existing on vine object
    [ ] get tags for vines
        [ ] if vigor == DEAD, add tag DEAD to vine tags
        [ ] if lastMaintenance if still ongoing, display in maintenance tag